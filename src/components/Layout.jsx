import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import NavBar from "./Navbar";
import SideNav from "./SideNav";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-auto h-auto">
        <NavBar />
      </div>
      <div className="w-full h-[90%] flex">
        <div className="w-auto h-auto border-t-2">
          <SideNav/>
        </div>
        <div className="w-full h-full p-5 overflow-y-scroll">
          <Outlet />
          <div className="w-auto h-auto absolute right-0 bottom-2 mr-2 fixed">
            {open ? <Alert variant={false} severity={""}>
                
              </Alert>:null}
          </div>
        </div>
      </div>
    </div>
  );
}
