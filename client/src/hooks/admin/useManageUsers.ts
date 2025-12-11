"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/types";
import { subscribeToUsers, toggleUserRole } from "@/firebase/admin/fetchUsers";

export function useManageUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToUsers((allUsers) => {
      setUsers(allUsers);
    });

    return () => unsubscribe();  
  }, []);

  const toggleRole = async (userId: string, currentRole: "admin" | "user") => {
    await toggleUserRole(userId, currentRole);
  };

  return { users, toggleRole };
}
