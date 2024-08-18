import { useEffect, useState } from "react";
import { Loop, M, Tick } from "../lib";
import axios from "axios";
import AddUser from "./Actions/AddUser";
import DeleteUser, { SetId } from "./Actions/DeleteUser";
import EditUser, { SetResidentInfo } from "./Actions/EditUser";

export default function ManageUsers() {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const [data, sendData] = useState({});

  const MInit = async () => {
    await M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"));
    await M.Modal.init(document.querySelectorAll(".modal"));
  };

  const SearchUsers = async (keyword) => {
    const search = {
      username: keyword,
    };

    const res = await axios.post(
      "http://localhost:4435/accounts/search",
      search
    );
    sendData(res.data);
  };

  const OrderById = async () => {
    const res = await axios.get("http://localhost:4435/accounts");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    const search = document.querySelector("#searchUsers");

    if (search.value !== "") return SearchUsers(search.value);

    return OrderById();
  };

  return (
    <>
      <AddUser />
      <EditUser />
      <DeleteUser />

      <div className="row">
        <div className="col s12 p-5">
          <div className="row">
            <div className="col s9">
              <h1 className="text-3xl bis-green">Manage Users</h1>
            </div>

            <div className="col s3 flex items-center">
              <button
                className="btn bg-green waves-effect text-white p-3 mx-5 modal-trigger"
                data-target="addUser"
              >
                <i className="material-icons">add</i>
              </button>
              <div className="input-field outlined">
                <div className="suffix">
                  <i className="material-icons">search</i>
                </div>
                <input
                  id="searchUsers"
                  className="form-control"
                  placeholder="Search users"
                />
              </div>
            </div>

            <div className="col s12">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Date joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <Loop repeat={data.length}>
                    {(index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data[index].username}</td>
                        <td>{data[index].passphrase}</td>
                        <td>{data[index].role}</td>
                        <td>{data[index].creation}</td>
                        <td>
                          <button
                            className="btn waves-effect bg-blue-950 p-3 mx-2 modal-trigger"
                            data-target="editUser"
                            onClick={() => SetResidentInfo(data[index].id)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button className="btn waves-effect bg-red-500">
                            <i className="material-icons">person</i>
                          </button>
                          <button
                            className="btn waves-effect bg-red-500 p-3 mx-2 modal-trigger"
                            data-target="deleteUser"
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
