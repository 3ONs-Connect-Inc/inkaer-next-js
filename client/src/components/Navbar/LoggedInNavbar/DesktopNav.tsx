"use client";

import { Button } from "@/components/ui/button";
import { navigation } from "@/constants";
import useLogout from "@/hooks/auth/useLogout";

interface DesktopNavProps {
  isActive: (hash: string) => boolean;
  handleScroll: (e: React.MouseEvent, hash: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isActive, handleScroll }) => {
    const logout = useLogout();

  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-6">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className={`text-lg font-medium transition-colors duration-200
            ${isActive(item.href)
              ? "text-blue-700 font-semibold"
              : "text-gray-700 hover:text-blue-600"}`}
        >
          {item.name}
        </a>
      ))}

      <a
        href="#request-shortlist"
        onClick={(e) => handleScroll(e, "#request-shortlist")}
        className={`bg-blue-600 text-lg text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200
          ${isActive("#request-shortlist") ? "bg-blue-700 font-semibold" : ""}`}
      >
        Request Demo
      </a>
        <Button
        onClick={logout}
        className="bg-blue-600 text-lg text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Log out
      </Button>
    </div>
  );
};



export default DesktopNav;
