const UniversalDiscount = () => {
  return (
    <div className="w-full flex items-center justify-center gap-3 sm:gap-6 pt-10 sm:pt-20 px-4">
      {/* Ձախ գիծ (Մոբայլում ավելի փոքր է կամ հարմարվող) */}
      <div className="hidden sm:block w-[100px] md:w-[300px] lg:w-[550px] h-[2px] bg-black flex-shrink-0"></div>
      
      {/* Վերնագիր */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-sans text-center whitespace-nowrap">
        Հատուկ զեղչեր
      </h1>

      {/* Աջ գիծ */}
      <div className="hidden sm:block w-[100px] md:w-[250px] lg:w-[410px] h-[2px] bg-black flex-shrink-0"></div>
    </div>
  );
};

export default UniversalDiscount;