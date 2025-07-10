import React from "react"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
};

export default AppLayout;