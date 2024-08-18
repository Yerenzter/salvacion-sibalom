import axios from "axios";

async function CreateResident() {
  let fname = document.querySelector("#addFname");
  let mname = document.querySelector("#addMname");
  let lname = document.querySelector("#addLname");
  let age = document.querySelector("#addAge");
  let gender = document.querySelector("#addGender");
  let maritalStatus = document.querySelector("#addMaritalStatus");
  let purok = document.querySelector("#addPurok");
  let birthday = document.querySelector("#addBirthday");
  let birthplace = document.querySelector("#addBirthplace");
  let voterStatus = document.querySelector("#addVoterStatus");

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
  };

  await axios.post("http://localhost:4435/residents/post", data);
}

export default function AddResident() {
  return (
    <div className="modal" id="addResident">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-3xl">Add new resident</h1>
            <div className="divider my-5"></div>

            <div className="row">
              <div className="col s4 input-field outlined">
                <input id="addFname" placeholder=" " />
                <label htmlFor="addFname">Firstname</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addMname" placeholder=" " />
                <label htmlFor="addMname">Middlename</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addLname" placeholder=" " />
                <label htmlFor="addLname">Lastname</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addAge" placeholder=" " />
                <label htmlFor="addAge">Age</label>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectGender"
                >
                  <input id="addGender" placeholder=" " readOnly={true} />
                  <label htmlFor="addGender">Gender</label>
                </div>

                <ul id="selectGender" className="dropdown-content">
                  <li onClick={() => (addGender.value = "Male")}>
                    <a href="#">Male</a>
                  </li>

                  <li onClick={() => (addGender.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectMaritalStatus"
                >
                  <input
                    id="addMaritalStatus"
                    placeholder=" "
                    readOnly={true}
                  />
                  <label htmlFor="addMaritalStatus">Marital Status</label>
                </div>

                <ul id="selectMaritalStatus" className="dropdown-content">
                  <li onClick={() => (addMaritalStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>

                  <li onClick={() => (addMaritalStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>

                  <li onClick={() => (addMaritalStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>

                  <li onClick={() => (addMaritalStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addPurok" placeholder=" " />
                <label htmlFor="addPurok">Purok</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addBirthday" placeholder=" " type="date" />
                <label htmlFor="addBirthday">Birthday</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addBirthplace" placeholder=" " />
                <label htmlFor="addBirthplace">Birthplace</label>
              </div>

              <div className="col s4">
                <div
                  className="input-field outlined dropdown-trigger"
                  data-target="selectVoterStatus"
                >
                  <input id="addVoterStatus" placeholder=" " readOnly={true} />
                  <label htmlFor="addVoterStatus">Voter Status</label>
                </div>

                <ul id="selectVoterStatus" className="dropdown-content">
                  <li onClick={() => (addVoterStatus.value = "Registered")}>
                    <a href="#">Registered</a>
                  </li>
                  <li onClick={() => (addVoterStatus.value = "Not Registered")}>
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
              onClick={() => CreateResident()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
