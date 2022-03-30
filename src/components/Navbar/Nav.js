import React from "react";
import Link from "./Link/Link";

const Nav = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Blog", link: "/blog" },
  ];
  return (
    <nav className="flex justify-between py-5 items-center">
      <a href="/" className="text-3xl">
        Logo
      </a>

      <ul className="flex gap-5">
        {routes.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
