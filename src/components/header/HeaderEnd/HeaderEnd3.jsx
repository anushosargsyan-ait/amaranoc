import React from "react";

const HeaderEnd3 = ({ place, className = "", children, ...props }) => {
  return (
    <div className="relative flex items-center w-full min-w-0">
      <input
        type="text"
        placeholder={place}
        /* 🔴 w-full, min-w-0 և outline-none ճկունության համար */
        className={`w-full min-w-0 outline-none transition-all ${className}`}
        {...props}
      />
      {children}
    </div>
  );
};

export default HeaderEnd3;