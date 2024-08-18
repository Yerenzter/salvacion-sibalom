import { SetPage } from "../components/Login";

export default function Sidenav() {
  return (
    <ul id="menu" className="sidenav">
      <li
        className="modal-trigger"
        data-target="login"
        onClick={() => SetPage("/manage/residents")}
      >
        <a href="#">Manage Residents</a>
      </li>
      <li
        className="modal-trigger"
        data-target="login"
        onClick={() => SetPage("/manage/users")}
      >
        <a href="#">Manage Users</a>
      </li>
      <div className="divider"></div>
      <li>
        <a href="/">Logout</a>
      </li>
    </ul>
  );
}
