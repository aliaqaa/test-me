import React from 'react';
import Cookies from "js-cookie";
import { FaUser } from 'react-icons/fa';
function AuthButton() {
  const isJwt = Cookies.get('jwt');

  return (
    isJwt ? (
      <button className="bg-green-500 p-4 text-white rounded-3xl hoverscale" ><FaUser/></button>
    ) : (
      <button className="bg-green-500 p-2 text-white rounded-3xl hoverscale">حساب کاربری</button>
    )
  );
}

export default AuthButton;