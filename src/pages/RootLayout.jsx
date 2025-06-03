import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import BackToTop from "@components/BackToTop";

const RootLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <BackToTop />
    </div>
  );
};

export default RootLayout;
