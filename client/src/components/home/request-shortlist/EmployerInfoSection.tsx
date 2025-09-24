"use client";

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { locationOptions } from '@/constants';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface Props {
  industryValue: string;
  setIndustryValue: (val: string) => void;
  industryOther: string;
  setIndustryOther: (val: string) => void;
  locationValue: string;
  setLocationValue: (val: string) => void;
  locationOther: string;
  setLocationOther: (val: string) => void;
  emailError: string;
  setEmailError: (val: string) => void;
  validateEmail: (val: string) => string;
    urgencyValue: string;
  setUrgencyValue: (val: string) => void;
}

const EmployerInfoSection: React.FC<Props> = ({
  industryValue,
  setIndustryValue,
  industryOther,
  setIndustryOther,
  locationValue,
  setLocationValue,
  locationOther,
  setLocationOther,
  emailError,
  setEmailError,
  validateEmail,
   urgencyValue,
  setUrgencyValue,
}) => {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Employer Information</h3>
          <p className="text-sm text-gray-600 mt-1">
            Tell us about your company and requirements
          </p>
        </div>

        {/* name + company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your full name as the hiring manager or recruiter</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="John Smith"
              required
              className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Your Company <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The company name where you&apos;re hiring for this position</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="company"
              type="text"
              name="company"
              placeholder="Acme Manufacturing"
              required
              className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* industry + location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                Industry <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The industry sector your company operates in</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select
              required
              value={industryValue}
              onValueChange={(value: string) => {
                setIndustryValue(value);
                if (value !== 'others') setIndustryOther('');
              }}
            >
              <SelectTrigger className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="aerospace">Aerospace</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="medical">Medical Devices</SelectItem>
                <SelectItem value="energy">Energy</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
            {industryValue === 'others' && (
              <Input
                type="text"
                placeholder="Please specify industry"
                value={industryOther}
                onChange={(e) => setIndustryOther(e.target.value)}
                className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                Location <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>City and country where the position is located</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select
              required
              value={locationValue}
              onValueChange={(value: string) => {
                setLocationValue(value);
                if (value !== 'others') setLocationOther('');
              }}
            >
              <SelectTrigger className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {locationValue === 'others' && (
              <Input
                type="text"
                placeholder="Please specify city and country"
                value={locationOther}
                onChange={(e) => setLocationOther(e.target.value)}
                className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            )}
          </div>
        </div>

        {/* urgency + email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                Urgency <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>How quickly you need to start interviewing candidates</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select required value={urgencyValue} onValueChange={setUrgencyValue}>
              <SelectTrigger className="h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">Need interviews this week</SelectItem>
                <SelectItem value="next-week">Need interviews next week</SelectItem>
                <SelectItem value="this-month">Need interviews this month</SelectItem>
                <SelectItem value="flexible">Flexible timeline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Contact Email <span className="text-red-500">*</span>
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email address where we can send your shortlist</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              className={`h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
              }`}
              onChange={(e) => {
                const error = validateEmail(e.target.value);
                setEmailError(error);
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default EmployerInfoSection;
