
import ViewAllUsers from "@/components/admin/users/ViewAllUsers";
import React from "react";


const UsersPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard – Users</h1>
      <ViewAllUsers />
    </div>
  );
};

export default UsersPage;
