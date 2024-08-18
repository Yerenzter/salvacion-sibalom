import axios from "axios";

let id = 0;

function RemoveResident() {
  const data = {
    id: id,
  };

  axios.post("http://localhost:4435/residents/delete", data);
}

export function SetId(idXYZ) {
  return (id = idXYZ);
}

export default function DeleteResident() {
  return (
    <div id="deleteResident" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Delete Resident</h1>
            <div className="divider my-5"></div>
            <p>Are you sure you want to remove from resdients?</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-flat waves-effect modal-close">
              Cancel
            </button>
            <button
              className="btn btn-flat waves-effect modal-close"
              onClick={() => RemoveResident()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
