import { db } from "@/firebase/config";
import { deleteFileFromR2 } from "@/utils/actions/r2Delete";
import {
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection,
  getDoc,
} from "firebase/firestore";

/**
 * Create a new portfolio (overwrite if exists)
 */
export async function savePortfolio(id: string, data: any) {
  return await setDoc(doc(db, "portfolio", id), data, { merge: true });
}

export async function upsertPortfolio(id: string, data: any) {
  const ref = doc(db, "portfolio", id);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    return await updateDoc(ref, data);
  }
  return await setDoc(ref, data, { merge: true });
}

/**
 * Update only specific fields of a portfolio
 */
export async function updatePortfolio(id: string, data: any) {
  return await updateDoc(doc(db, "portfolio", id), data);
}
/** Fetch a single portfolio once */
export async function fetchPortfolio(id: string) {
  const snap = await getDoc(doc(db, "portfolio", id));
  return snap.exists() ? snap.data() : null;
}

/**
 * Delete a portfolio
 */
export async function deletePortfolio(id: string) {
  return await deleteDoc(doc(db, "portfolio", id));
}

/**
 * Real-time listener for all portfolios
 */
export function listenToAllPortfolios(callback: (data: any[]) => void) {
  const colRef = collection(db, "portfolio");

  return onSnapshot(colRef, (snapshot) => {
    const results = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(results);
  });
}  

/**
 * Real-time listener for a single portfolio (for forms)
 */
export function listenToPortfolio(id: string | null | undefined, callback: (data: any) => void) {
  if (!id) {
    console.warn("listenToPortfolio called without a valid ID");
    return () => {}; // return empty unsubscribe function
  }

  const docRef = doc(db, "portfolio", id);

  return onSnapshot(docRef, (snapshot) => {
    if (snapshot.exists()) {
      callback({ id: snapshot.id, ...snapshot.data() });
    } else {
      callback(null);
    }
  });
}

export async function ensurePortfolioExists(id: string) {
  const ref = doc(db, "portfolio", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      createdAt: Date.now(),
    });
  }
}

export async function deletePortfolioAndFiles(id: string) {
  const data = await fetchPortfolio(id);
  if (!data) return;

  await Promise.all([
    deleteFileFromR2(data.pdfUrl),
    deleteFileFromR2(data.stepUrl),
    deleteFileFromR2(data.videoUrl),
  ]);

  await deletePortfolio(id);
}


export async function deletePreviousFile(url?: string) {
  if (!url) return;
  await deleteFileFromR2(url);
}


//deletes portfolio files and access code files that have same id
// export async function deletePortfolioAndFiles(portfolioId: string) {
//   // Fetch portfolio data so we know file URLs
//   const data = await fetchPortfolio(portfolioId);
//   if (!data) return;

//   console.log("Deleting R2 files...");

//   await Promise.all([
//     deleteFileFromR2(data.pdfUrl),
//     deleteFileFromR2(data.stepUrl),
//     deleteFileFromR2(data.videoUrl),
//   ]);

//   console.log("Deleting Firestore portfolio document...");

//   await deleteDoc(doc(db, "portfolio", portfolioId));

//   console.log("Deleting related access codes...");

//   const accessCodesRef = collection(db, "accessCodes");
//   const q = query(accessCodesRef, where("portfolioId", "==", portfolioId));

//   const snapshot = await getDocs(q);

//   const deletions = snapshot.docs.map((docSnap) => deleteDoc(docSnap.ref));
//   await Promise.all(deletions);

//   console.log(`Removed ${snapshot.size} access codes for portfolio ${portfolioId}`);
// }
