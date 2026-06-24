const HeaderTextP = ({ children }) => {
  return (
    <p
      className="text-[16px] text-[#1f2937] font-medium transition-colors duration-200 ease-in-out hover:text-black cursor-pointer whitespace-nowrap"
      style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
    >
      {children}
    </p>
  );
};

export default HeaderTextP;
