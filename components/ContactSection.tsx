import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("interested")}</h2>
          <h3 className="text-4xl font-serif">{t("talkToUs")}</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="mb-8">
              <Image
                src="/placeholder.svg"
                alt="Einstein Explicações Logo"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Einstein Explicações</h3>
              <p className="text-gray-600">{t("address")}</p>
            </div>

            <div className="space-y-4">
              <Link
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                contact@example.com
              </Link>
              <Link
                href="tel:+351123456789"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Phone className="h-5 w-5" />
                +351 123 456 789
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.name")}
                  </label>
                  <Input id="name" required />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.email")}
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.phone")}
                  </label>
                  <Input id="phone" type="tel" required />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                >
                  {t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
