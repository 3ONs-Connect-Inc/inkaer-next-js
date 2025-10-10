"use client";

import React from "react";
import { useManageUsers } from "@/hooks/admin/useManageUsers";
import { AdminTable } from "../AdminTable";
import { User } from "@/types";
import { useUserSearch } from "./useUserSearch";
import { SearchDropdown } from "@/components/ui/SearchDropdown";

const ManageUsers = () => {
  const { users, toggleRole } = useManageUsers();
  const { queryText, setQueryText, results } = useUserSearch();

  // filter admins for display in table
  const adminUsers = users
    .filter((u) => u.role === "admin")  
    .map((u) => ({
      ...u,
      firstName: u.firstName || "Anonymous",
      lastName: u.lastName || "Anonymous",
    }));

  const handleSelectUser = async (user: User) => {
    if (user.role !== "admin") {
      await toggleRole(user.id, user.role);
    }
    setQueryText(""); // clear search input
  };

  const columns = [
    { header: "First Name", accessor: "firstName" as const, className: "w-[100px]" },
    { header: "Last Name", accessor: "lastName" as const, className: "w-[100px]" },
    { header: "Email", accessor: "email" as const, className: "w-[200px]" },
    {
      header: "Role",
      render: (user: User) => (
        <button
          className="flex items-center gap-2 justify-center px-3 py-1 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
        >
          <span>🛡️</span> 
          {user.role === "admin" ? "Admin" : "User"}
        </button>
      ),
    },
    {
      header: "Actions",
      render: (user: User) => (
        <button
          onClick={() => toggleRole(user.id, user.role)}
          className={`px-3 py-1 rounded text-sm ${
            user.role === "admin"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          Switch to {user.role === "admin" ? "User" : "Admin"}
        </button>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* 🔍 Search Input */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Add Admin by Email</h2>
        <SearchDropdown<User>
          query={queryText}
          onChange={setQueryText}
          results={results}
          getLabel={(u) => `${u.email} (${u.role})`}
          onSelect={handleSelectUser}
          placeholder="Search user by email..."
        />
      </div>

      {/*  Admin Table */}
      <AdminTable<User>
        title="Manage Admin Users"
        data={adminUsers}
        columns={columns}
      />
    </div>
  );
};

export default ManageUsers;
