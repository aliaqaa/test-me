import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/icons/logo (1).png";
import Cookies from "js-cookie";
import AuthButton from "../AuthButton/AuthButton";

function AuthHeader() {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isJwt = Cookies.get("jwt");

  return (
    <>
      <div className="container m-auto flex justify-between p-5 items-center">
        <Link to={isJwt ? "/userpanel" : "/auth"} className="hidden md:block">
        <AuthButton/>
        </Link>
        <Link to="/" className="hoverscale">
          <img src={logo} alt="logo" />
        </Link>

        

      </div>
    </>
  );
}

export default AuthHeader;
