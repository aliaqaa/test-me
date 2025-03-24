import React from "react";
import { Outlet } from "react-router";
import AuthFooter from "../components/common/AuthFooter/AuthFooter";
import AuthHeader from "../components/common/AuthHeader/AuthHeader";

function AuthLayout({ children }) {
  return (
    <>
      <div className="container m-auto">
        <AuthHeader />
        <main>
          {" "}
          <Outlet />
        </main>

        <AuthFooter />
      </div>
    </>
  );
}

export default AuthLayout;
