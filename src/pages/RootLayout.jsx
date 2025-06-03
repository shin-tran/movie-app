import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
