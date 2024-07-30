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

              <div className="col s4 input-field outlined">
                <input id="addGender" placeholder=" " />
                <label htmlFor="addGender">Gender</label>
              </div>

              <div className="col s4 input-field outlined">
                <input id="addMaritalStatus" placeholder=" " />
                <label htmlFor="addMaritalStatus">Marital Status</label>
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

              <div className="col s4 input-field outlined">
                <input id="addVoterStatus" placeholder=" " />
                <label htmlFor="addVoterStatus">Voter Status</label>
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
