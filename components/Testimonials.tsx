import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      id: 1,
      name: "Rui Bernardo",
      subject: "Aluno de matemática",
      content: "testimonial1",
    },
    {
      id: 2,
      name: "Maria João",
      subject: "Aluna de economia",
      content: "testimonial2",
    },
    {
      id: 3,
      name: "Carla Tavares",
      subject: "Aluna de literatura",
      content: "testimonial3",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {t(`content.${testimonial.content}`)}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.subject}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
