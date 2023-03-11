import { Outlet } from "react-router";
import { Suspense } from "react";
import AppBar from "../AppBar";
import Loader from "../Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <ToastContainer />
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
