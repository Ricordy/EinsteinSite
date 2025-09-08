import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import StructuredData from "@/components/StruturedData";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Einstein Explicações",
  description: "Centro de Explicações Einstein",
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StructuredData />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
