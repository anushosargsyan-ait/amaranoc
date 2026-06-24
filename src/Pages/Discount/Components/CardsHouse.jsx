const housesData = [
  {
    id: 1,
    location: "Բջնի",
    guests: 8,
    price: "45,000",
    rating: null,
    image:
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1759149473223--0.33907271602966693image.webp&w=1920&q=75",
  },
  {
    id: 2,
    location: "Բջնի",
    guests: 25,
    price: "80,000",
    rating: 5,
    image:
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1764083598180--0.6582491079586374image.webp&w=1920&q=75",
  },
  {
    id: 3,
    location: "Աշտարակ",
    guests: 25,
    price: "80,000",
    rating: 5,
    image:
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762686772282--0.7753343924665224image.webp&w=1920&q=75",
  },
  {
    id: 4,
    location: "Ծաղկաձոր",
    guests: 15,
    price: "80,000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    location: "Ծաղկաձոր",
    guests: 20,
    price: "90,000",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    location: "Աշտարակ",
    guests: 30,
    price: "100,000",
    rating: null,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
];

const CardGrid = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {housesData.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-[32px] overflow-hidden group cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px]">
              <img
                src={house.image}
                alt={house.location}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/10 backdrop-blur-[2px] px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
              </div>

              <button className="absolute bottom-3 right-3 w-9 h-9 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:bg-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>

            <div className="pt-4 pb-2 px-2">
              <div className="flex items-center justify-between text-[#5f6368]">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="#e08434"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span className="text-[15px] font-medium text-black">
                      {house.location}
                    </span>
                  </div>

                  {/* Кол-во человек */}
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="#e08434"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="text-[15px] text-gray-500">
                      {house.guests}
                    </span>
                  </div>
                </div>

                {house.rating && (
                  <div className="flex items-center gap-1 bg-[#f98b2d] text-white px-2.5 py-0.5 rounded-md text-sm font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{house.rating}</span>
                  </div>
                )}
              </div>

              {/* Вторая строка: Цена */}
              <div className="mt-3 flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="#e08434"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-xl font-bold text-gray-800 tracking-wide">
                  {house.price} <span className="font-medium text-lg">֏</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
