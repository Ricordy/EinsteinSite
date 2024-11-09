import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{t("years.value")}</h2>
            <p className="text-lg text-gray-600">{t("years.description")}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{t("subjects.value")}</h2>
            <p className="text-lg text-gray-600">{t("subjects.description")}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{t("students.value")}</h2>
            <p className="text-lg text-gray-600">{t("students.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
