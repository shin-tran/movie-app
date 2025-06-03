import React, { Suspense } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import BackToTop from "@components/BackToTop";
import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <BackToTop />
    </div>
  );
};

export default RootLayout;
