import type { Metadata } from "next";
import { getCareerPostById } from "@/firebase/main/careersService";
import Application from "@/components/careers/Application";


interface Props {
  searchParams: { jobId?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const jobId = searchParams.jobId;
  let job: any = null;

  try {
    if (jobId) {
      job = await getCareerPostById(jobId);
    }
  } catch (error) {
    console.error("Error fetching job for metadata:", error);
  }

  if (!job) {
    return {
      title: "Job not found – Inkaer Careers",
      description: "The job you’re looking for doesn’t exist.",
      openGraph: {
        title: "Job not found – Inkaer Careers",
        description: "The job you’re looking for doesn’t exist.",
        type: "website",
        url: "https://inkaer.com/careers/application",
      },
      twitter: {
        card: "summary_large_image",
        title: "Job not found – Inkaer Careers",
        description: "The job you’re looking for doesn’t exist.",
      },
    };
  }

  const title = `${job.title} – Inkaer Careers`;
  const description = job.description || `${job.title} - Apply now at Inkaer.`;
  const url = `https://inkaer.com/careers/application/?jobId=${jobId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Inkaer",
      images: job.image ? [{ url: job.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: job.image ? [job.image] : undefined,
    },
  };
}

export default function ApplicationPage({ searchParams }: Props) {
  return <Application jobId={searchParams.jobId!} />;
}
