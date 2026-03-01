import Image from "next/image";
import NavLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Image
          src="/roudiLogo-black.png"
          alt="Logo"
          width={36}
          height={36}
          priority
        />

        {/* Center Links */}
        <NavLinks />

        {/* Right side placeholder */}
        <div className="w-15" />
      </nav>
    </header>
  );
}