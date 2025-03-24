import React from "react";
import DefualtHeader from "../components/common/DefualtHeader/DefualtHeader";
import { Outlet } from "react-router";
const DefualtLayout = () => (
  <div>
    <DefualtHeader />
      <Outlet />
  </div>
);

export default DefualtLayout;
