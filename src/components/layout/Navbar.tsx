import Image from "next/image";
import NavLinks from "./NavbarLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="/roudiLogo-black.png" title="Eng.Roudi Hannan" alt="Logo" width={36} height={36} priority />
          <span className="font-medium text-gray-800">Eng.Roudi</span>
        </div>
        <NavLinks />
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}