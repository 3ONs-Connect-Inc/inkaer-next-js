"use client";


import LoggedInUser from "@/components/home/LoggedIn";
import Guest from "@/components/home/Guest";
import { useSession } from "@/hooks/auth/useSession";

export default function HomeContent() {
const { user} = useSession();
  return <>{user ? <LoggedInUser /> : <Guest />}</>;
}
  