
"use client";

import { ArrowLeft, Calendar, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import VerificationSummary from "./VerificationSummary";

export default function Hero({ candidate, data }: { candidate: any, data: any }, ) {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
      <div className="mx-auto max-w-7xl padding">

        {/* Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <span className="text-blue-200 text-sm">Portfolio Viewer</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Side */}
          <div>
            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                {candidate.projectNumber}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                <Calendar className="w-3 h-3 mr-1" />
                {candidate.projectDate}
              </Badge>
            </div>  

            <h1 className="xs:text-4xl text-xl  font-bold mb-4">{candidate.name}</h1>
            <p className="xs:text-xl text-base text-blue-100 mb-4">{candidate.title}</p>

            <div className="flex xs:flex-row flex-col items-center gap-4 text-blue-100 mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {candidate.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {candidate.email}
              </span>
            </div>

            {/* Tools */}
            <div className="mb-6">
              <h3 className="xs:text-lg text-base font-semibold mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.toolsUsed.map((tool: string, index: number) => (
                  <Badge
                    key={index}
                    className="bg-white/20 text-white border-white/30"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
         
                  <VerificationSummary candidate={data} />
          
        </div>
      </div>
    </section>
  );
}
