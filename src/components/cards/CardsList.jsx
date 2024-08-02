import React from "react";

const CardsList = ({ children }) => {
  return (
    <div className="py-24 px-3 mx-auto" style={{ maxWidth: "1400px" }}>
      {children}
    </div>
  );
};

export default CardsList;
