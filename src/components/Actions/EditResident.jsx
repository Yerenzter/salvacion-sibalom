import axios from "axios";

let id = 0;

export function SetResidentId(idXYZ = 0) {
  return (id = idXYZ);
}

async function ModifyResident() {
  let fname = document.querySelector("#editFname");
  let mname = document.querySelector("#editMname");
  let lname = document.querySelector("#editLname");
  let age = document.querySelector("#editAge");
  let gender = document.querySelector("#editGender");
  let maritalStatus = document.querySelector("#editMaritalStatus");
  let purok = document.querySelector("#editPurok");
  let birthday = document.querySelector("#editBirthday");
  let birthplace = document.querySelector("#editBirthplace");
  let voterStatus = document.querySelector("#editVoterStatus");

  let data = {
    fname: fname.value,
    mname: mname.value,
    lname: lname.value,
    age: age.value,
    gender: gender.value,
    marital_status: maritalStatus.value,
    purok: purok.value,
    birthday: birthday.value,
    birthplace: birthplace.value,
    voter_status: voterStatus.value,
    id: id,
  };

  await axios.put("http://localhost:4435/residents/edit", data);
}

export default function EditResident() {
  return (
    <div className="modal" id="editResident">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Edit resident</h1>
            <div className="divider my-5"></div>

            <div className="row">
              <div className="col s4 input-field outlined">
                <input id="editFname" placeholder=" " />
                <label htmlFor="editFname">Firstname</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editMname" placeholder=" " />
                <label htmlFor="editMname">Middlename</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editLname" placeholder=" " />
                <label htmlFor="editLname">Lastname</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editAge" placeholder=" " />
                <label htmlFor="editAge">Age</label>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectEditGender"
                >
                  <input id="editGender" placeholder=" " readOnly={true} />
                  <label htmlFor="editGender">Gender</label>
                </div>

                <ul id="selectEditGender" className="dropdown-content">
                  <li onClick={() => (editGender.value = "Male")}>
                    <a href="#">Male</a>
                  </li>

                  <li onClick={() => (editGender.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectEditMaritalStatus"
                >
                  <input
                    id="editMaritalStatus"
                    placeholder=" "
                    readOnly={true}
                  />
                  <label htmlFor="editMaritalStatus">Marital Status</label>
                </div>

                <ul id="selectEditMaritalStatus" className="dropdown-content">
                  <li onClick={() => (editMaritalStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>

                  <li onClick={() => (editMaritalStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>

                  <li onClick={() => (editMaritalStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>

                  <li onClick={() => (editMaritalStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editPurok" placeholder=" " />
                <label htmlFor="editPurok">Purok</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editBirthday" placeholder=" " type="date" />
                <label htmlFor="editBirthday">Birthday</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="editBirthplace" placeholder=" " />
                <label htmlFor="editBirthplace">Birthplace</label>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectEditVoterStatus"
                >
                  <input id="editVoterStatus" placeholder=" " readOnly={true} />
                  <label htmlFor="editVoterStatus">Voter Status</label>
                </div>

                <ul id="selectEditVoterStatus" className="dropdown-content">
                  <li onClick={() => (editVoterStatus.value = "Registered")}>
                    <a href="#">Registered</a>
                  </li>
                  <li
                    onClick={() => (editVoterStatus.value = "Not Registered")}
                  >
                    <a href="#"> Not Registered</a>
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
              onClick={() => ModifyResident()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
