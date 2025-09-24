import Application from "../Application";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now – Inkaer Careers",
  description:
    "Apply for open positions at Inkaer. Submit your application and join our team.",
  openGraph: {
    title: "Apply Now – Inkaer Careers",
    description:
      "Apply for open positions at Inkaer. Submit your application and join our team.",
    url: "https://inkaer.com/application",
    siteName: "Inkaer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now – Inkaer Careers",
    description:
      "Apply for open positions at Inkaer. Submit your application and join our team.",
  },
};


export default function ApplicationPage () {
 return <Application />;
};

