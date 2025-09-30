"use client";
import { useState } from "react";
import { Eye } from "lucide-react";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import { format } from "date-fns";
import Modal from "@/components/admin/ui/Modal";
import { PageLoader } from "@/components/ui/Spinner";
import { Contact, useContacts } from "@/hooks/admin/useContacts";

export default function Contacts() {
  const { data: contacts = [], isLoading, isError } = useContacts();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  if (isLoading) return <PageLoader />;
  if (isError) return <p>Failed to load contacts.</p>;

  const columns: Column<Contact>[] = [
    { header: "First Name", accessor: "firstName", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Last Name", accessor: "lastName", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Email", accessor: "email", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Company", accessor: "company", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Subject", accessor: "subject", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Message", accessor: "message", className: "w-[200px] max-w-[300px]  truncate" },
   {
  header: "Date",
  className: "w-[220px] max-w-[280px] truncate",
  render: (item) => (
    <span className="truncate block">
      {format(item.createdAt.toDate(), "PPpp")}
    </span>
  ),
},
{
  header: "Actions",
  className: "w-[80px] text-center",
  render: (item) => (
    <button
      onClick={() => setSelectedContact(item)}
      className="p-2 text-blue-600 hover:text-blue-800"
    >
      <Eye size={18} />
    </button>
  ),
},

  ];

  return (
    <>
      <AdminTable<Contact>
        title="All Contacted Users"
        data={contacts}
        columns={columns}
        rowKey={(item) => item.id}
      />

      {/* Modal for contact details */}
      <Modal
        isOpen={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        title="Contact Details"
      >
        {selectedContact && (
          <div className="space-y-2">
            <p><strong>First Name:</strong> {selectedContact.firstName}</p>
            <p><strong>Last Name:</strong> {selectedContact.lastName}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Company:</strong> {selectedContact.company}</p>
            <p><strong>Subject:</strong> {selectedContact.subject}</p>
            <p><strong>Message:</strong> {selectedContact.message}</p>
            <p>
              <strong>Date:</strong>{" "}
              {format(selectedContact.createdAt.toDate(), "PPpp")}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
