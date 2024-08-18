import axios from "axios";

let id = 0;

function RemoveUser() {
  const data = {
    id: id,
  };

  axios.post("http://localhost:4435/accounts/delete", data);
}

export function SetId(idXYZ) {
  return (id = idXYZ);
}

export default function DeleteUser() {
  return (
    <div id="deleteUser" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Delete user</h1>
            <div className="divider my-5"></div>

            <p>Are you sure you want to delete this user?</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-flat waves-effect modal-close">
              Cancel
            </button>
            <button
              className="btn btn-flat waves-effect modal-close"
              onClick={() => RemoveUser()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
