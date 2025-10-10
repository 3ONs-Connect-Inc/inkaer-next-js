import { getCareerPostByIdServer, getCareerPostsServer } from "@/firebase/main/adminServer";
import type { Metadata } from "next";
import Application from "../Application";

type Params = { jobId: string };

//  Always return at least one dummy param to prevent build crash
export async function generateStaticParams() {
  try {
    const posts = await getCareerPostsServer();
    if (!posts || posts.length === 0) {
      // Return a placeholder so Next.js still generates a page
      return [{ jobId: "placeholder" }];
    }
    return posts.map((p) => ({ jobId: p.id }));
  } catch {
    // In case Firestore throws an error (e.g. no credentials)
    return [{ jobId: "placeholder" }];
  }
}

//  Metadata generation now safe if job not found
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { jobId } = params;
  const post = await getCareerPostByIdServer(jobId);

  if (!post || jobId === "placeholder") {
    return {
      title: "Job not found – Inkaer Careers",
      description: "The job you’re looking for doesn’t exist or is unavailable.",
    
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
