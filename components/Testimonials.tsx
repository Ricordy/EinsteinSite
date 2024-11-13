"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      id: 1,
      name: "Rui Bernardo",
      subject: "testimonial1",
      content: "testimonial1",
    },
    {
      id: 2,
      name: "Maria João",
      subject: "testimonial2",
      content: "testimonial2",
    },
    {
      id: 3,
      name: "Carla Tavares",
      subject: "testimonial3",
      content: "testimonial3",
    },
    {
      id: 4,
      name: "Joana Silva",
      subject: "testimonial4",
      content: "testimonial4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <p className="text-gray-600 mb-4">
                      {t(`content.${testimonial.content}`)}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {t(`subject.${testimonial.subject}`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="  relative flex justify-center mt-10">
            <div className="flex">
              <CarouselPrevious className="  top-0 left-0 translate-x-0 " />
              <CarouselNext className="  top-0 right-0  " />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
