import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
