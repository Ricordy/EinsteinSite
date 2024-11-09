import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function OfferingCards() {
  const t = useTranslations("Offerings");

  const offerings = [
    {
      title: "individualClasses",
      image: "/girlwithbook.png",
      features: [
        "personalizedLessons",
        "flexibleSchedule",
        "immediateFeedback",
      ],
    },
    {
      title: "groupClasses",
      image: "/students.png",
      features: ["contentVariety", "softSkills", "feedback"],
    },
    {
      title: "onlineClasses",
      image: "/onlineclasses.jpg",
      features: ["anywhereAccess", "continuousCommunication"],
    },
  ];

  return (
    <section id="oferecemos" className="py-20 bg-green-50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <Card
              key={offering.title}
              className="overflow-hidden flex flex-col"
            >
              <CardHeader className="p-0">
                <Image
                  src={offering.image}
                  alt={t(`${offering.title}.imageAlt`)}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 bg-emerald-700 text-white h-full">
                <h3 className="text-xl font-semibold mb-4">
                  {t(`${offering.title}.title`)}
                </h3>
                <ul className="space-y-2">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-white rounded-full" />
                      {t(`${offering.title}.features.${feature}`)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
