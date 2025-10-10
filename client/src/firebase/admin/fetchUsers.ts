
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "../config";
import { User } from "@/types";




export async function deleteUser(userId: string): Promise<void> {
  await deleteDoc(doc(db, "users", userId));
}



// Subscribe in realtime to all users
export function subscribeToUsers(callback: (users: User[]) => void) {
  const q = query(collection(db, "users"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const users: User[] = snapshot.docs.map((docSnap) => {
      const data = docSnap.data() as Partial<User>;
      return {
        id: docSnap.id,
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        email: data.email ?? "",
        role: (data.role as "admin" | "user") ?? "user", // fallback default
      };
    });
    callback(users);
  });
  return unsubscribe;
}

// Toggle role between admin <-> user
export async function toggleUserRole(userId: string, currentRole: string) {
  const newRole = currentRole === "admin" ? "user" : "admin";
  await updateDoc(doc(db, "users", userId), { role: newRole });
  return newRole;  
}