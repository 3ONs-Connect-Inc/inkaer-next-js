"use client";

import { Card } from "@/components/ui/card";
import JobDetails from "@/components/careers/application/JobDetails";
//import ApplicationForm from "@/components/careers/application/ApplicationForm";
import { PageLoader } from "@/components/ui/Spinner";
import { useCareerPosts } from "@/hooks/main/useCareers";

type ApplicationProps = {
  jobId: string;
};

export default function Application({ jobId }: ApplicationProps) {
  const { data: jobs, isLoading } = useCareerPosts();
  const currentJob = jobs?.find((j) => j.id === jobId);

  if (isLoading) {  
    return <PageLoader />;
  }

  if (!currentJob) {
    return (
      <div className="p-8 text-center text-gray-600">
        Job not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="py-16">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Apply for {currentJob.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {currentJob.tagline}
            </p>
          </div>
        </section>

        {/* Job details + form */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <Card className="mb-8 bg-white shadow-sm border border-gray-200">
            <JobDetails position={currentJob.title} currentJob={currentJob} />
          </Card>

          <Card className="bg-white shadow-sm border border-gray-200">
            {/* <ApplicationForm jobId={jobId} /> */}
          </Card>
        </div>
      </main>
    </div>
  );
}
