import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-gray-300 px-5">
            <a href="#">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
