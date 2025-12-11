import * as THREE from 'three'

const initOCCT = (await import('occt-import-js')).default as (
  opts?: any
) => Promise<any>

const stepCache = new Map<string, THREE.Object3D>();

export async function LoadStep(fileUrl: string): Promise<THREE.Object3D> {
  if (stepCache.has(fileUrl)) return stepCache.get(fileUrl)!.clone();

  const res = await fetch(fileUrl);
  const buffer = await res.arrayBuffer();
  const fileBuffer = new Uint8Array(buffer);  

  const occt = await initOCCT({
    locateFile: () => '/occt-import-js.wasm',
  }); 

  const result = occt.ReadStepFile(fileBuffer, null);
  if (!result.success || !result.meshes?.length) throw new Error("STEP failed");

  const group = new THREE.Object3D();  

  for (const mesh of result.meshes) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(mesh.attributes.position.array, 3));
    if (mesh.attributes.normal) {
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(mesh.attributes.normal.array, 3));
    }
    geometry.setIndex(new THREE.BufferAttribute(Uint16Array.from(mesh.index.array), 1));

    const color = mesh.color
      ? new THREE.Color(...mesh.color)
      : new THREE.Color(0xffffff);

    const material = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.5,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });

    group.add(new THREE.Mesh(geometry, material));
  }

  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.sub(center);
  const size = box.getSize(new THREE.Vector3()).length();
  const scale = 2 / size;
  group.scale.setScalar(scale);

  stepCache.set(fileUrl, group.clone());

  return group;
}