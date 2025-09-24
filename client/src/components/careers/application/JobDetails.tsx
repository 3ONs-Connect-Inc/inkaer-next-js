import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, MapPin, Clock, DollarSign } from "lucide-react";
import type { CareerPost } from "@/types";

interface JobDetailsProps {
  position: string;
  currentJob: CareerPost
}

const JobDetails: React.FC<JobDetailsProps> = ({ position, currentJob }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <Briefcase className="w-5 h-5 text-blue-600" />
          Job Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Job Summary */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{position}</h3>
          <p className="text-gray-600 mb-4"  dangerouslySetInnerHTML={{ __html: currentJob.fullDescription }}></p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {currentJob.department}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {currentJob.location}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {currentJob.type}
            </span>
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {currentJob.salary}
            </span>  
          </div>
        </div>

        {/* Key Responsibilities */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {currentJob.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Requirements
          </h4>
          <ul className="space-y-2">
            {currentJob.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Benefits & Perks
          </h4>
          <ul className="space-y-2">
            {currentJob.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </>
  );
};

export default JobDetails;
