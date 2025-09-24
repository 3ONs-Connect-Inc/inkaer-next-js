"use client";

import LoggedInNavbar from "./LoggedInNavbar";
import GuestNavbar from "./GuestNavbar";
import { useSession } from "@/hooks/auth/useSession";

const Navbar = () => {
  const { user, loading } = useSession();

  if (loading) return null; 

  return user ? <LoggedInNavbar /> : <GuestNavbar />;
};

export default Navbar;
