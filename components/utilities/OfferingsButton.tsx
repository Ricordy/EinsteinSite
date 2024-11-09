"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface OfferingsButton {
  className?: string;
  children?: React.ReactNode;
}

const OfferingsButton = ({ className, children }: OfferingsButton) => {
  const t = useTranslations("Header");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("oferecemos");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (children) {
    return (
      <Link href="#oferecemos" onClick={handleClick} passHref>
        {children}
      </Link>
    );
  }

  return (
    <Link href="#oferecemos" onClick={handleClick} passHref>
      <Button
        className={cn(
          "bg-emerald-600 hover:bg-emerald-700 text-white",
          className
        )}
      >
        {t("offerings")}
      </Button>
    </Link>
  );
};

export default OfferingsButton;
