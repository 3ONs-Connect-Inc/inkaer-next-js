import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo/logoDark.svg"
        alt="Inkaer"
        width={120}      
        height={32}     
        className="h-8 sm:h-8 w-auto"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
