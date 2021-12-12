import React from "react";
import NavLink from "./NavLink";

import LogoItem from "./LogoItem";
import MobileNavigationMenu from "./MobileNavigationMenu";

export default function Navigation() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <LogoItem />
        <MobileNavigationMenu />
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow gap-x-8 ">
            <NavLink path="/#" label="Home" />
            <NavLink path="/#" label="Docs" />
            <NavLink path="/#" label="Login" />
          </div>
        </div>
      </nav>
    </div>
  );
}
