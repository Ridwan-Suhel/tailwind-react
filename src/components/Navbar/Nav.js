import React, { useState } from "react";
import Link from "./Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Blog", link: "/blog" },
  ];
  return (
    <nav className="flex justify-between py-5 md:items-center">
      <a href="/" className="text-3xl">
        Logo
      </a>

      <ul
        className={`md:flex gap-5 md:relative absolute duration-500 ease-in mbMenu ${
          open ? "top-16 md:top-0" : "top-[-100%] md:top-0"
        }`}
      >
        {routes.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))}
      </ul>

      {/* menu bar */}
      <div
        onClick={() => setOpen(!open)}
        className="navbar md:hidden w-6 h-6 text-black-500"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
    </nav>
  );
};

export default Nav;
