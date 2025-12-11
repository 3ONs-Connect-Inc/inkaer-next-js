"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const toolOptions = ["SolidWorks", "MATLAB", "AutoCAD", "ANSYS"];

export default function ProjectDetailsSection({ form, update }: any) {
  return (
    <div className="space-y-6 p-6">
        <h2 className="text-xl font-semibold">Project Details</h2>

        {/* Tools */}
        <div>
          <label className="font-medium">Tools Used</label>
          <Select
            onValueChange={(tool) => update("toolsUsed", [...form.toolsUsed, tool])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select tools" />
            </SelectTrigger>
            <SelectContent>
              {toolOptions.map((tool) => (
                <SelectItem key={tool} value={tool}>
                  {tool}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-2 mt-2">
            {form.toolsUsed.map((tool: string) => (
              <span
                key={tool}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Status Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectField
            label="Originality Check"
            value={form.originalityStatus}
            options={["Passed", "Failed", "Pending"]}
            onChange={(v: any) => update("originalityStatus", v)}
          />

          <SelectField
            label="Industry Relevance"
            value={form.industryRelevance}
            options={["Verified", "Not Verified", "Pending"]}
            onChange={(v: any) => update("industryRelevance", v)}
          />

          <SelectField
            label="Technical Interview"
            value={form.technicalInterview}
            options={["Recorded", "Not Recorded", "Pending"]}
            onChange={(v: any) => update("technicalInterview", v)}
          />
        </div>
    </div>
  );
}

function SelectField({ label, value, options, onChange }: any) {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <Select onValueChange={onChange} defaultValue={value}>
        <SelectTrigger>
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt: string) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
