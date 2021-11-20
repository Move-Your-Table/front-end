import React from "react";
import logo from "../../assets/myt-transp.png";

export default function LogoItem() {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img className="w-20" src={logo} />

      <span className="font-semibold text-xl tracking-tight">
        Move Your table
      </span>
    </div>
  );
}
