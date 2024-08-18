import axios from "axios";

let id = 0;

function ModifyUser() {
  let username = document.querySelector("#editUsername");
  let password = document.querySelector("#editPassword");

  const data = {
    username: username.value,
    passphrase: password.value,
    id: id,
  };

  axios.put("http://localhost:4435/accounts/edit", data);
}

export function SetResidentInfo(idXYZ) {
  return (id = idXYZ);
}

export default function EditUser() {
  return (
    <div id="editUser" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Edit resident</h1>
            <div className="divider my-5"></div>

            <div className="row">
              <div className="col s12 input-field outlined">
                <input id="editUsername" placeholder=" " />
                <label htmlFor="editUsername">Username</label>
              </div>

              <div className="col s12 input-field outlined">
                <input id="editPassword" placeholder=" " />
                <label htmlFor="editPassword">Password</label>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-flat waves-effect modal-close">
                Cancel
              </button>
              <button
                className="btn btn-flat waves-effect modal-close"
                onClick={() => ModifyUser()}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
