import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { M } from "../lib";
import Sidenav from "./Sidenav";
import { Login } from "../components";

export default function Layout() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Sidenav.init(document.querySelector("#menu"));
  };

  return (
    <>
      <Login />
      <Sidenav />

      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-gray-300">
            <a
              href="#"
              className="sidenav-trigger show-on-large"
              data-target="menu"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
