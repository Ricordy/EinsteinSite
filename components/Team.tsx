import Image from "next/image";
import { useTranslations } from "next-intl";

export function Team() {
  const t = useTranslations("Team");

  const team = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Ana Silva",
      role: "coordinator",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Maria Santos",
      role: "portuguese",
    },
    {
      id: 3,
      image: "/placeholder.svg",
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
        <div className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
