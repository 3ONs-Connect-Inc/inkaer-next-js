



import type { Metadata } from "next";
import Application from "./Application";


export const metadata: Metadata = {
  title: "Apply for a Career at Inkaer",
  description:
    "Join Inkaer’s team of innovators. Explore open positions and submit your application today.",
  openGraph: {
    title: "Apply for a Career at Inkaer",
    description:
      "Join Inkaer’s team of innovators. Explore open positions and submit your application today.",
    type: "website",
    url: "https://inkaer.com/careers/application",
    siteName: "Inkaer",  
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for a Career at Inkaer",
    description:
      "Join Inkaer’s team of innovators. Explore open positions and submit your application today.",
  },
};



export default function ApplicationPage() {
  return <Application  />;
}
