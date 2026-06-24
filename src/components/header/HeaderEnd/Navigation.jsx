const Navigation = ({ children, className }) => {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default Navigation;
