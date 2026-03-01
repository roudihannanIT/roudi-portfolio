"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";
  const nextLocale = currentLocale === "en" ? "de" : "en";

  const switchLanguage = () => {
    router.push(`/${nextLocale}${pathname.substring(3)}`);
  };

  return (
    <button
      onClick={switchLanguage}
      className="px-3 py-1 border rounded text-xs font-semibold text-gray-700 hover:bg-gray-100 transition"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}