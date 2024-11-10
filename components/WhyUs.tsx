import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="w-full">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 self-center text-center">
              {t("title")}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-emerald-600 rounded-full mt-2" />
                <p>{t("experience")}</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-emerald-600 rounded-full mt-2" />
                <p>{t("otherPhrase")}</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 bg-emerald-600 rounded-full mt-2" />
                <p>{t("excellence")}</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
