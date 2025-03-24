import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "../pages/landing/Landing";
import ProtectedRoute from "./ProtectedRoute"; 
import Auth from "../pages/auth/Auth"; 
import AuthLayout from "../layouts/AuthLayout";
import DefualtLayout from "../layouts/DefualtLayout";
import Courses from "../pages/courses/Courses";
const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<DefualtLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
