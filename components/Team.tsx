"use client";
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
import Autoplay from "embla-carousel-autoplay";

export function Team() {
  const t = useTranslations("Team");

  const team = [
    {
      id: 1,
      image: "/alex.png",
      name: "Alexandra Cativo Quintas",
      role: "econimicsF",
    },
    {
      id: 2,
      image: "/claudia.png",
      name: "Cláudia Luz",
      role: "geoF",
    },
    {
      id: 3,
      image: "/marcio.png",
      name: "Márcio Lourenço",
      role: "mathM",
    },
    {
      id: 4,
      image: "/fatima.jpg",
      name: "Fátima Moreno",
      role: "englishF",
    },
    {
      id: 5,
      image: "/catarina.jpg",
      name: "Catarina Cativo Quintas",
      role: "mathF",
    },
    {
      id: 6,
      image: "/isabel.jpg",
      name: "Isabel Lança",
      role: "portugueseF",
    },
    {
      id: 7,
      image: "/anamoura.jpg",
      name: "Ana Moura",
      role: "cienciasF",
    },
    {
      id: 8,
      image: "/susanafigueiredeo.jpg",
      name: "Susana Figueiredo",
      role: "macsF",
    },
    {
      id: 9,
      image: "/orlando.png",
      name: "Orlando Alho",
      role: "fqM",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>

        <Carousel
          className="w-full   mx-auto"
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {team.map((member) => (
              <CarouselItem
                key={member.id}
                className="md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1 flex flex-col items-center">
                  <div className="relative w-80 h-80 mb-4">
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
