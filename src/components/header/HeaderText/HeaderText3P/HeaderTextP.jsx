const HeaderTextP = ({ children }) => {
  return (
    <p
      /* 🔴 Mobile-ում text-[14px], ավելի մեծ էկրաններին՝ text-[16px] */
      className="text-[14px] sm:text-[16px] text-[#1f2937] font-medium transition-colors duration-200 ease-in-out hover:text-black cursor-pointer whitespace-nowrap select-none m-0 w-full py-1 lg:py-0"
      style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
    >
      {children}
    </p>
  );
};

export default HeaderTextP;