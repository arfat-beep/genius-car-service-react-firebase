import React from "react";
let year = new Date();
const Footer = () => {
  return (
    <div className="p-2 bg-dark text-white text-center">
      <p>
        <small>copyright © {year.getFullYear()}</small>
      </p>
    </div>
  );
};

export default Footer;
