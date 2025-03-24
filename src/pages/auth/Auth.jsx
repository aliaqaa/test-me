import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/SignUp/SignUp";
function Auth() {
  const [auth, setAuth] = useState("register");
  return (
    <div className="linear-gradient relative w-3/5  h-3/5 rounded-2xl flex-col justify-center m-auto p-20 px-40 ">
      {auth === "login" ? <Login setAuth={setAuth}/> : <Register setAuth={setAuth}/>}
      <div className="flex flex-col gap-10 absolute -right-20 top-20">
        <button className="cursor-pointer" onClick={() => setAuth("register")}>ثبت نام</button>
        <button className="cursor-pointer" onClick={() => setAuth("login")}>ورود</button>
      </div>
    </div>
  );
}

export default Auth;
