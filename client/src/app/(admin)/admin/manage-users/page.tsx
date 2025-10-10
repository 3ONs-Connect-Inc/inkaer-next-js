
import ManageUsers from "@/components/admin/users/ManageUsers";
import React from "react";


const ManagePage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard · Users</h1>
      <ManageUsers />
    </div>
  );
};

export default ManagePage;
