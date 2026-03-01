import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Image
          src="/roudiLogo-white.png"
          alt="Logo"
          width={36}
          height={36}
          priority
        />
      </nav>
    </header>
  );
}