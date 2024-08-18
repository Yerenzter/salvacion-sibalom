import axios from "axios";

function CreateUser() {
  let username = document.querySelector("#addUsername");
  let password = document.querySelector("#addPassword");
  let role = document.querySelector("#addRole");
  let date = new Date();
  let year = date.getUTCFullYear();
  let month =
    date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
  let day = date.getUTCDay() <= 9 ? `0${date.getUTCDay()}` : date.getUTCDay();

  const data = {
    username: username.value,
    passphrase: password.value,
    role: role.value,
    creation: `${year}${month}${day}`,
  };

  axios.post("http://localhost:4435/accounts/post", data);
}

export default function AddUser() {
  return (
    <div id="addUser" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Add new account</h1>
            <div className="divider my-5"></div>

            <div className="row">
              <div className="col s12 m3 input-field outlined">
                <input id="addUsername" placeholder=" " />
                <label htmlFor="addUsername">Username</label>
              </div>

              <div className="col s12 m3 input-field outlined">
                <input id="addPassword" placeholder=" " />
                <label htmlFor="addPassword">Password</label>
              </div>

              <div
                className="col s12 m3 input-field outlined dropdown-trigger"
                data-target="selectRole"
              >
                <input id="addRole" placeholder=" " readOnly={true} />
                <label htmlFor="addRole">Role</label>

                <ul id="selectRole" className="dropdown-content">
                  <li onClick={() => (addRole.value = "Admin")}>
                    <a href="#">Admin</a>
                  </li>
                  <li onClick={() => (addRole.value = "Personnel")}>
                    <a href="#">Personnel</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-flat waves-effect modal-close">
              Cancel
            </button>
            <button
              className="btn btn-flat waves-effect modal-close"
              onClick={() => CreateUser()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
