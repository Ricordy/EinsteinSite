"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useDropMessage from "@/hooks/useDropMessage";

export function ContactSection() {
  const t = useTranslations("Contact");
  const { DropMessage, contextHolder } = useDropMessage();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    DropMessage("loading", "A enviar mensagem...");
    try {
      const response = await fetch("/api/pedidoContacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formValues.name,
          email: formValues.email,
          telemovel: formValues.phone,
          mensagem: formValues.message,
        }),
      });

      if (response.ok) {
        DropMessage("success", "Mensagem enviada com sucesso!");
        setFormValues({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Failed to submit form:", response.statusText);
        DropMessage(
          "error",
          "Falha ao enviar mensagem. Por favor, tente novamente."
        );
      }
    } catch (error) {
      console.error("API Error:", error);
      DropMessage(
        "error",
        "Erro ao enviar mensagem. Por favor, tente novamente mais tarde."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contactos" className="bg-green-50 py-20">
      {contextHolder}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("interested")}</h2>
          <h3 className="text-4xl font-serif">{t("talkToUs")}</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="mb-8">
              <Image
                src="/EinsteinLogoGreen.svg"
                alt="Einstein Explicações Logo"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Einstein Explicações</h3>
              <Link
                className="text-gray-600 "
                href="geo:37.01980738462322,-7.926359569549336"
              >
                {t("address")}
              </Link>
            </div>

            <div className="space-y-4">
              <Link
                href="mailto:geral@einsteinexplicacoes.pt"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                geral@einsteinexplicacoes.pt
              </Link>
              <Link
                href="tel:+351910672248"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Phone className="h-5 w-5" />
                +351 910 672 248
              </Link>
              <Link
                href="https://www.facebook.com/EinsteinExplicacoesFaro"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/einstein.explicacao/"
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
              <form
                onSubmit={handleSubmit}
                className={`space-y-4 ${isLoading ? "cursor-wait" : ""}`}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    {t("form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    required
                  />
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
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "A enviar..." : t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
