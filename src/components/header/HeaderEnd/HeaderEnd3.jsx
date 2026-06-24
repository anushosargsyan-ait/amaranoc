const HeaderEnd3 = ({ place, className, children }) => {
  return (
    <>
      <input className={className} placeholder={place} type="text" />
      {children}
    </>
  );
};

export default HeaderEnd3;
