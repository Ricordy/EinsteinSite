import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Team() {
  const t = useTranslations("Team");

  const team = [
    {
      id: 1,
      image: "/alex.png",
      name: "Alexandra Cativo Quintas",
      role: "coordinator",
    },
    {
      id: 2,
      image: "/claudia.png",
      name: "Cláudia Luz",
      role: "portuguese",
    },
    {
      id: 3,
      image: "/marcio.png",
      name: "Márcio Lourenço",
      role: "math",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>

        <Carousel className="w-full  mx-auto">
          <CarouselContent>
            {team.map((member) => (
              <CarouselItem key={member.id} className="basis-1/3">
                <div className="p-1">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={member.image}
                      alt={t("memberImageAlt", { name: member.name })}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{t(`roles.${member.role}`)}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
