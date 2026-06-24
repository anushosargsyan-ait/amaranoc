import { useState } from "react";
import {
  ConciergeBell,
  Wand2,
  PartyPopper,
  Rocket,
  SunDim,
  ArrowRight,
} from "lucide-react";

export default function CategoryNavigation() {
  const [activeId, setActiveId] = useState(1);

  const categories = [
    {
      id: 1,
      label: "Սպասարկում",
      icon: <ConciergeBell strokeWidth={1.25} size={28} />,
    },
    { id: 2, label: "Շոու", icon: <Wand2 strokeWidth={1.25} size={28} /> },
    {
      id: 3,
      label: "Միջոցառումներ",
      icon: <PartyPopper strokeWidth={1.25} size={28} />,
    },
    { id: 4, label: "Տեխնիկա", icon: <Rocket strokeWidth={1.25} size={28} /> },
    {
      id: 5,
      label: "Օրավարձով գույք",
      icon: <SunDim strokeWidth={1.25} size={28} />,
    },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100/80 py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-between items-center overflow-x-auto no-scrollbar pr-6 gap-6">
          {categories.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className="flex flex-col items-center justify-center min-w-max group bg-transparent border-none outline-none cursor-pointer"
              >
                <div
                  className={`mb-3 transition-colors duration-200 ${isActive ? "text-black" : "text-gray-700 group-hover:text-black"}`}
                >
                  {item.icon}
                </div>

                <span
                  className={`text-sm tracking-wide transition-colors duration-200 ${isActive ? "text-black font-medium" : "text-gray-700"}`}
                >
                  {item.label}
                </span>

                <div
                  className={`h-[3px] w-8 rounded-full mt-2 transition-all duration-300 ${isActive ? "bg-orange-400" : "bg-transparent"}`}
                />
              </button>
            );
          })}
        </div>

        <button className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-black transition-all ml-4">
          <ArrowRight strokeWidth={1.5} size={20} />
        </button>
      </div>
    </div>
  );
}
