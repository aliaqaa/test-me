import React from "react";
import AuthButton from "../AuthButton/AuthButton";
import logo from "../../../assets/icons/logo (1).png";
import { Link } from "react-router";
import NavbarItems from "../../../Mock/NavbarItems";
function DefualtHeader() {
  return (
    <div className="container m-auto flex justify-between p-2">
      <AuthButton />
      <div className="flex gap-x-6 text-black items-center flex-row-reverse">
        {NavbarItems.map((item) => (
          <Link to={item.href} className="cursor-pointer" key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link to="/panel" className="cursor-pointer">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default DefualtHeader;
