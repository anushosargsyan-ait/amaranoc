import { Tag } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      title: "Մատուցող",
      description:
        "Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման...",
      price: "20,000",
      imageUrl:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=1920&q=75",
    },
    {
      id: 2,
      title: "Բարմեն",
      description:
        "Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։ Մեր բարմենները պատասխանատ...",
      price: "25,000",
      imageUrl:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724330468263--0.5829426973721912image.webp&w=1920&q=75",
    },
    {
      id: 3,
      title: "Խոհարար",
      description:
        "Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ և տաղանդ, մեր խոհարարները ստեղծում են համերի և...",
      price: "35,000",
      imageUrl:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331582281--0.8016246618454268image.webp&w=1920&q=75",
    },
    {
      id: 4,
      title: "Հանդիսավար",
      description:
        "Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի) ընտրության հարցում, քանի որ միայն իսկական հանդիսավարը կարող է իր...",
      price: "60,000",
      imageUrl:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724346434036--0.5362400594372552image.webp&w=1920&q=75",
    },
    {
      id: 5,
      title: "Փրփուր Փարթի",
      description:
        "Նյութերը սերտիֆիկացված են, աչքերը չեն մրմռացնում, ալերգիա չեն առաջացնում, անվնաս են նաև բույսերի և լողավազանի համար։",
      price: "26,900",
      imageUrl:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725721755318--0.3513684578103693image.webp&w=1920&q=75", // Փոխարինեք ձեր նկարով
    },
  ];

  return (
    <div className="w-full bg-gray-50/50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-shadow hover:shadow-md"
            >
              {/* Նկար */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Տեքստային հատված */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* line-clamp-3 ապահովում է առավելագույնը 3 տող և վերջում ավելացնում է ... */}
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Ներքևի հատված (Գին և Կոճակ) */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  {/* Գին */}
                  <div className="flex items-center gap-1.5 text-gray-800">
                    <Tag
                      size={16}
                      className="text-orange-300"
                      strokeWidth={2}
                    />
                    <span className="font-black text-xl tracking-tight">
                      {service.price} <span className="font-bold">֏</span>
                    </span>
                  </div>

                  {/* Ամրագրել կոճակ */}
                  <button className="px-5 py-1.5 rounded-full border border-orange-200 text-gray-700 text-sm font-medium hover:bg-orange-50 hover:border-orange-300 transition-colors">
                    Ամրագրել
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
