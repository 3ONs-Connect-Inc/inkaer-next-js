import { getCareerPostByIdServer, getCareerPostsServer } from "@/firebase/main/adminServer";
import type { Metadata } from "next";
import Application from "../Application";

type Params = { jobId: string };

//  Always return at least one dummy param to prevent build crash
export async function generateStaticParams() {
    const posts = await getCareerPostsServer();
    return posts.map((p) => ({ jobId: p.id }));
}

//  Metadata generation now safe if job not found
export async function generateMetadata(
  props: { params: Promise<Params> }
): Promise<Metadata> {
  const { jobId } = await props.params; 
  const post = await getCareerPostByIdServer(jobId);

  if (!post) {
    return {
      title: "Job not found – Inkaer Careers",
      description: "The job you’re looking for doesn’t exist.",

    };
  }
  return {
    title: `${post.title} – Inkaer Careers`,
    description: post.description || `${post.title} - Apply now at Inkaer.`,
     openGraph: {
      title: `${post.title} – Inkaer Careers`,
      description: post.description || `${post.title} - Apply now at Inkaer.`,
      url: `https://inkaer.com/careers/application/${jobId}`,
      siteName: "Inkaer",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} – Inkaer Careers`,
      description: post.description || `${post.title} - Apply now at Inkaer.`,
    },
  };
}

export default async function ApplicationPage({ params }: { params: Params }) {
  const { jobId } = params;
  return <Application jobId={jobId} />;
}
