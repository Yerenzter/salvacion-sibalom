import { useEffect, useState } from "react";
import { Loop, M, Tick } from "../lib";
import axios from "axios";
import AddResident from "./Actions/AddResdient";
import EditResident, { SetResidentId } from "./Actions/EditResident";
import DeleteResident, { SetId } from "./Actions/DeleteResident";

export default function ManageResidents() {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const [data, sendData] = useState({});

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
    await M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"));
  };

  const SearchResident = async (keyword) => {
    const search = {
      id: keyword,
      fname: keyword,
      mname: keyword,
      lname: keyword,
    };

    const res = await axios.post(
      "http://localhost:4435/residents/search",
      search
    );
    sendData(res.data);
  };

  const OrderById = async () => {
    const res = await axios.get("http://localhost:4435/residents");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    const search = document.querySelector("#searchResident");

    if (search.value !== "") return SearchResident(search.value);

    return OrderById();
  };

  return (
    <>
      <AddResident />
      <EditResident />
      <DeleteResident />

      <div className="row">
        <div className="col s12 p-5">
          <div className="row">
            <div className="col s9">
              <h1 className="text-3xl bis-green">
                Manage Resident Information
              </h1>
            </div>

            <div className="col s3 flex items-center">
              <button
                className="btn bg-green waves-effect text-white p-3 mx-5 modal-trigger"
                data-target="addResident"
              >
                <i className="material-icons">add</i>
              </button>
              <div className="input-field outlined">
                <div className="suffix">
                  <i className="material-icons">search</i>
                </div>
                <input
                  id="searchResident"
                  className="form-control"
                  placeholder="Search residents"
                />
              </div>
            </div>

            <div className="col s12">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Firstname</th>
                    <th>Middlename</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Marital Status</th>
                    <th>Purok</th>
                    <th>Birthdate</th>
                    <th>Place of Birth</th>
                    <th>Voter status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <Loop repeat={data.length}>
                    {(index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data[index].fname}</td>
                        <td>{data[index].mname}</td>
                        <td>{data[index].lname}</td>
                        <td>{data[index].age}</td>
                        <td>{data[index].gender}</td>
                        <td>{data[index].marital_status}</td>
                        <td>{data[index].purok}</td>
                        <td>{data[index].birthday}</td>
                        <td>{data[index].birthplace}</td>
                        <td>{data[index].voter_status}</td>
                        <td>
                          <button
                            className="btn waves-effect bg-blue-950 p-3 mx-2 modal-trigger"
                            data-target="editResident"
                            onClick={() => SetResidentId(data[index].id)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            className="btn waves-effect bg-red-500 p-3 mx-2 modal-trigger"
                            data-target="deleteResident"
                            onClick={() => SetId(data[index].id)}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    )}
                  </Loop>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
