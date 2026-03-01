import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  const resolvedLocale = locale ?? "en";

  let messages;
  try {
    messages = (await import(`../../messages/${resolvedLocale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={resolvedLocale}>
      <body>
        <NextIntlClientProvider locale={resolvedLocale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}