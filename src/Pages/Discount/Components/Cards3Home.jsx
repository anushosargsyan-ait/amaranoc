const Cards3Home = () => {
  const cardsData = [
    {
      discount: "-15%",
      title: "Զեղչ կախված ամրագրման օրերի քանակից",
      description: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր։",
    },
    {
      discount: "-10%",
      title: "Ամենահայտնի Reel-ը սոցիալական հարթակում",
      description:
        "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր 15% զեղչ։",
    },
    {
      discount: "-5%",
      title: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար",
      description:
        "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ։",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl bg-[url('https://amaranoc.am/images/raffle/special-discounts-image.jpg')] bg-cover bg-center h-[280px] w-full p-6 flex flex-col justify-between text-left transition-transform duration-300 hover:scale-[1.02] shadow-md"
          >
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300 pointer-events-none" />

            <h2 className="text-white text-8xl font-black tracking-tighter mt-2 z-10 relative">
              {card.discount}
            </h2>

            <div className="z-10 relative text-white">
              <h3 className="text-[17px] font-bold leading-snug mb-1">
                {card.title}
              </h3>

              <p className="text-xs text-gray-200 font-medium leading-normal">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards3Home;
