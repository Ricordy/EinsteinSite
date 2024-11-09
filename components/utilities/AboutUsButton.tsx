"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AboutUsButton {
  className?: string;
  children?: React.ReactNode;
}

const AboutUsButton = ({ className, children }: AboutUsButton) => {
  const t = useTranslations("Header");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("sobre");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (children) {
    return (
      <Link href="#sobre" onClick={handleClick} passHref>
        {children}
      </Link>
    );
  }

  return (
    <Link href="#sobre" onClick={handleClick} passHref>
      <Button
        className={cn(
          "bg-emerald-600 hover:bg-emerald-700 text-white",
          className
        )}
      >
        {t("about")}
      </Button>
    </Link>
  );
};

export default AboutUsButton;
