
import UserCodeLogin from "@/components/auth/UserCodeLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Your Account – Inkaer",
  description:
    "Login to your Inkaer account to access powerful hiring tools and manage your profile securely.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    title: "Login to Your Account – Inkaer",
    description:
      "Login to your Inkaer account to access powerful hiring tools and manage your profile securely.",
    siteName: "Inkaer",
  },
};

export default function SignInPage() {
  return <UserCodeLogin/>;
}