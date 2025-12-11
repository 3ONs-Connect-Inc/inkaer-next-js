"use client";

import React, { useEffect, useState } from "react";
import {
  subscribeToUsers,
} from "@/firebase/admin/fetchUsers";
import { AdminTable } from "../AdminTable";
import { User } from "@/types/types";

const ViewAllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Subscribe to real-time users
  useEffect(() => {
    const unsubscribe = subscribeToUsers(setUsers);
    return () => unsubscribe();
  }, []);

  const adminUsers = users
    .map((u) => ({
      ...u,
      firstName: u.firstName || "Anonymous",
      lastName: u.lastName || "Anonymous",
    }));

  const columns = [
    { header: "FirstName", accessor: "firstName" as const, className: "w-[100px]" },
    { header: "LastName", accessor: "lastName" as const, className: "w-[100px]" },
    { header: "Email", accessor: "email" as const, className: "w-[200px]" },
    { header: "Role", accessor: "role" as const, className: "w-[80px]" },
  ];

  if (!users.length) {
    return <p className="p-6 text-gray-600">No users found.</p>;
  }

  return (
    <div className="p-6">
      <AdminTable<User> title="All Users" 
      data={adminUsers} 
      columns={columns} />
    </div>
  );
};

export default ViewAllUsers;
