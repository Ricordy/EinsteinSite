"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ContactUsButtonsProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactUsButtons = ({ className, children }: ContactUsButtonsProps) => {
  const t = useTranslations("Common");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contactos");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (children) {
    return (
      <Link href="#contactos" onClick={handleClick} passHref>
        {children}
      </Link>
    );
  }

  return (
    <Link href="#contactos" onClick={handleClick} passHref>
      <Button
        className={cn(
          "bg-emerald-600 hover:bg-emerald-700 text-white",
          className
        )}
        size={"xl"}
      >
        {t("contactUs")}
      </Button>
    </Link>
  );
};

export default ContactUsButtons;
