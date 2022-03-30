import React from "react";
import Nav from "../Navbar/Nav";

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <Nav></Nav>
      <h3 className="text-2xl py-3">Welcome To My Tailwind Website</h3>
    </div>
  );
};

export default Header;
