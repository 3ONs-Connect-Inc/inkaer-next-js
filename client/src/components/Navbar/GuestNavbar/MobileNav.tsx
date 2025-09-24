import { navigation } from "@/constants";

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isActive: (hash: string) => boolean;
  handleScroll: (e: React.MouseEvent, hash: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  mobileMenuOpen,
  isActive,
  handleScroll,
}) => {
  return (
    <>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block px-3 py-2 text-base sm:text-lg font-medium transition-colors duration-200
                  ${isActive(item.href)
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"}`}
              >
                {item.name}
              </a>
            ))}

            <div className="px-2 sm:px-3 py-2 space-y-2">
              <a
                href="#request-shortlist"
                onClick={(e) => handleScroll(e, "#request-shortlist")}
                className={`block w-full bg-blue-600 text-base sm:text-lg text-white px-3 sm:px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center
                  ${isActive("#request-shortlist")
                    ? "bg-blue-700 font-semibold"
                    : ""}`}
              >
                Request Shortlist
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
