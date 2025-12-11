"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProjectDetailsSection from "./ProjectDetailsSection";
import { Button } from "@/components/ui/button";
import { fetchPortfolio,  updatePortfolio, upsertPortfolio } from "@/firebase/admin/portfolioService";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import { locationOptions } from "@/constants";
import { GeneralForm } from "@/types/types";


export default function GeneralInfoForm({ data, onClose }: any) {
  const isEditing = !!data?.id;

  const [form, setForm] = useState<GeneralForm>({
    name: data?.name || "",
    title: data?.title || "",
    email: data?.email || "",
    projectNumber: data?.projectNumber || `INK-${Date.now()}`,
    overview: data?.overview || "",
    toolsUsed: data?.toolsUsed || [],
    location: data?.location || "",
    originalityStatus: data?.originalityStatus || "",
    industryRelevance: data?.industryRelevance || "",
    technicalInterview: data?.technicalInterview || "",
  });

  const update = <K extends keyof GeneralForm>(key: K, val: GeneralForm[K]) =>
    setForm((p) => ({ ...p, [key]: val }));


  function validate() {
    const required: (keyof GeneralForm)[] = [
      "name",
      "title",
      "email",
      "overview",
      "location",
      "originalityStatus",
      "industryRelevance",
      "technicalInterview",
    ];

    for (const field of required) {
      const value = form[field];

      if (typeof value === "string" && value.trim() === "") {
        toast.error(`Missing required field: ${field}`);
        return false;
      }
    }

    if (form.toolsUsed.length === 0) {
      toast.error("Select at least one tool used");
      return false;
    }

    return true;
  }


async function submit() {
  if (!validate()) return;

  const id = data?.id ?? crypto.randomUUID();

  // Check whether the document already exists
  const existing = await fetchPortfolio(id);

  // If exists → update, else → create
  if (existing) {
    await updatePortfolio(id, {
      ...form,
      generalComplete: true,
    });
  } else {
  await upsertPortfolio(id, {
  ...form,
  generalComplete: true,
  
});

  }

  toast.success("General Information saved!");
  onClose();
}


  return (
    <Card>
      <CardContent className="space-y-4 p-6">

        <h2 className="text-xl font-semibold">
          {isEditing ? "Edit Portfolio Info" : "Create New Portfolio"}
        </h2>

        {/* FORM FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="font-medium">Full Name</label>
            <Input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Title / Profession</label>
            <Input
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <Input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Project Number</label>
            <Input disabled value={form.projectNumber} />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Location</label>

            <Select
              value={form.location}
              onValueChange={(v) => update("location", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((loc) => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Overview</label>
            <Textarea
              rows={4}
              value={form.overview}
              onChange={(e) => update("overview", e.target.value)}
              placeholder="Describe the project in detail..."
            />
          </div>
        </div>

        {/* PROJECT DETAILS (TOOLS + STATUS FIELDS) */}
        <ProjectDetailsSection form={form} update={update} />

        {/* SUBMIT */}
        <Button className="w-full" onClick={submit}>
          {isEditing ? "Update General Info" : "Save General Info"}
        </Button>

      </CardContent>
    </Card>
  );
}
