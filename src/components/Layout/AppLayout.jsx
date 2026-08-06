import Header from "../Header/Header";
import "./AppLayout.css";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
