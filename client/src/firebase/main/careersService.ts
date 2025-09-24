import type { CareerPost, CareersMeta } from '@/types'
import { addDoc, collection, deleteDoc, doc, getDoc,  onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'
import { db } from '../config'




const CAREERS_COL = 'careers'
const CAREERS_META_DOC = 'careersMeta'


export function listCareerPosts(): Promise<CareerPost[]> {
  return new Promise((resolve) => {
    const q = query(collection(db, CAREERS_COL), orderBy("createdAt", "desc"))

    // subscribe once, resolve on first snapshot
    const unsub = onSnapshot(q, (snap) => {
      const posts = snap.docs.map(
        (d) => ({ id: d.id, ...(d.data() as any) }) as CareerPost
      )
      resolve(posts)
    })

    // immediately unsubscribe after first result (React Query expects a one-shot fetcher)
    return () => unsub()
  })
}

export async function createCareerPost(payload: Omit<CareerPost, 'id' | 'createdAt' | 'updatedAt'>) {
const ref = await addDoc(collection(db, CAREERS_COL), {
...payload,
createdAt: Date.now(),
updatedAt: Date.now(),
})
const docSnap = await getDoc(ref)
return { id: ref.id, ...(docSnap.data() as any) } as CareerPost
}


export async function updateCareerPost(id: string, payload: Partial<CareerPost>) {
const ref = doc(db, CAREERS_COL, id)
await updateDoc(ref, { ...payload, updatedAt: Date.now() })
}


export async function deleteCareerPost(id: string) {
await deleteDoc(doc(db, CAREERS_COL, id))
}


export async function getCareersMeta(): Promise<CareersMeta | null> {
const ref = doc(db, 'settings', CAREERS_META_DOC)
const snap = await getDoc(ref)
if (!snap.exists()) return null
return { id: snap.id, ...(snap.data() as any) } as CareersMeta
}


export async function upsertCareersMeta(payload: Omit<CareersMeta, 'id' | 'updatedAt'>) {
const ref = doc(db, 'settings', CAREERS_META_DOC)
const current = await getDoc(ref)
if (current.exists()) {
await updateDoc(ref, { ...payload, updatedAt: Date.now() })
} else {
// create settings collection and this doc implicitly
await updateDoc(ref, { ...payload, updatedAt: Date.now() }).catch(async () => {
const { setDoc } = await import('firebase/firestore')
await setDoc(ref, { ...payload, updatedAt: Date.now() })
})
}
}






