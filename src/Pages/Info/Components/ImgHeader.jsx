const ImgHeader = () => {
  return (
    <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Ffirst_image.jpg&w=1920&q=75"
        alt="Header Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImgHeader;