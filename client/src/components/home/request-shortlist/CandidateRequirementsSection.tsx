"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { domainOptions } from "@/constants";
import { Badge } from "@/components/ui/badge";

interface CandidateRequirementsSectionProps {
  candidateDomain: string;
  setCandidateDomain: (val: string) => void;
  candidateOtherDomain: string;
  setCandidateOtherDomain: (val: string) => void;
}

const CandidateRequirementsSection: React.FC<CandidateRequirementsSectionProps> = ({
  candidateDomain,
  setCandidateDomain,
  candidateOtherDomain,
  setCandidateOtherDomain,
}) => {
  return (
        <TooltipProvider>
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Candidate Requirements</h3>
        <p className="text-sm text-gray-600 mt-1">Describe the ideal candidate profile</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Role Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="role-title" className="text-sm font-medium text-gray-700">
              Job Role Title <span className="text-red-500">*</span>
            </Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>The specific job title for this position</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="role-title"
            type="text"
            name="roleTitle"
            placeholder="Senior Design Engineer"
            required
            className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Engineering Domain */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="domain" className="text-sm font-medium text-gray-700">
              Engineering Domain <span className="text-red-500">*</span>
            </Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>The primary engineering discipline required for this role</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Select required value={candidateDomain} onValueChange={setCandidateDomain}>
            <SelectTrigger className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Select engineering domain" />
            </SelectTrigger>
            <SelectContent>
              {domainOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={!option.available}
                  className={!option.available ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{option.label}</span>
                    {!option.available && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {candidateDomain === "others" && (
            <Input
              type="text"
              placeholder="Please specify engineering domain"
              value={candidateOtherDomain}
              onChange={(e) => setCandidateOtherDomain(e.target.value)}
              className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          )}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="tools" className="text-sm font-medium text-gray-700">
            Must-Have Tools & Technologies <span className="text-red-500">*</span>
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Essential software, tools, or technologies the candidate must know</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input
          id="tools"
          type="text"
          name="tools"
          placeholder="SolidWorks, ANSYS, AutoCAD"
          required
          className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
        </TooltipProvider>

  );
};

export default CandidateRequirementsSection;
