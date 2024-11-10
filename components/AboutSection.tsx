"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="sobre" className="py-20 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:gap-12">
          {/* Purpose */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("purpose.title")}
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              {t("purpose.description")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("mission.title")}
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  {t.rich("mission.description", {
                    p: (chunks) => <p>{chunks}</p>,
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t("values.title")}</h3>
                <p className="mb-4 text-muted-foreground">
                  {t("values.subtitle")}
                </p>
                <ul className="space-y-2 text-muted-foreground list-none pl-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">•</span>
                      <span>{t(`values.list.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Vision */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">{t("vision.title")}</h3>
              <p className="mb-6 text-muted-foreground">
                {t("vision.subtitle")}
              </p>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">
                    {t("vision.tutors.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("vision.tutors.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    {t("vision.students.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("vision.students.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
