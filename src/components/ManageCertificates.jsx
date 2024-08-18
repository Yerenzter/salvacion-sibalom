import { useEffect, useState } from "react";
import { Loop, M, Tick } from "../lib";
import axios from "axios";
import {
  CreateClearance,
  CreateCutting,
  CreateIndigency,
} from "./Actions/CreateDocuments";

export default function ManageCertificates() {
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

  const SearchResidents = async (keyword) => {
    const data = {
      id: keyword,
      fname: keyword,
      mname: keyword,
      lname: keyword,
    };

    const res = await axios.post(
      "http://localhost:4435/residents/search",
      data
    );
    sendData(res.data);
  };

  const OrderById = async () => {
    const res = await axios.get("http://localhost:4435/residents");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector("#searchCertResident");

    if (search.value !== "") return SearchResidents(search.value);

    return OrderById();
  };

  return (
    <div className="row p-5">
      <div className="col s12">
        <div className="row">
          <div className="s12 m9">
            <h1 className="text-3xl bis-green">
              Barangay Documents Generation
            </h1>
          </div>

          <div className="col s12 m3">
            <div className="col s3 flex items-center">
              <div className="input-field outlined">
                <div className="suffix">
                  <i className="material-icons">search</i>
                </div>
                <input
                  id="searchCertResident"
                  className="form-control"
                  placeholder="Search residents"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col s12">
        <table className="striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Fullname</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Birthday</th>
              <th>Document Type</th>
            </tr>
          </thead>

          <tbody>
            <Loop repeat={data.length}>
              {(index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {data[index].fname} {data[index].mname} {data[index].lname}
                  </td>
                  <td>{data[index].age}</td>
                  <td>{data[index].gender}</td>
                  <td>{data[index].birthday}</td>
                  <td>
                    <button
                      className="btn bg-green text-white waves-effect gddt dropdown-trigger"
                      data-target="selectDocuments"
                    >
                      <i className="material-icons">download</i>
                    </button>

                    <ul id="selectDocuments" className="dropdown-content">
                      <li
                        onClick={() => {
                          CreateClearance(
                            `${data[index].fname} ${data[index].mname} ${data[index].lname}`,
                            data[index].age,
                            data[index].sex
                          );

                          M.toast({
                            text: `Document saved at /home/yerenzter/Documents/[BRGY. CLEARANCE] ${
                              data[index].fname
                            } ${data[index].mname} ${
                              data[index].lname
                            }-${new Date().getUTCDay()}${new Date().getUTCMonth()}${new Date().getUTCFullYear()}.pdf`,
                            displayLength: 2500,
                          });
                        }}
                      >
                        <a href="#">Barangay Clearance</a>
                      </li>
                      <li
                        onClick={() => {
                          CreateCutting(
                            `${data[index].fname} ${data[index].mname} ${data[index].lname}`,
                            "Lumber shop"
                          );

                          M.toast({
                            text: `Document saved at /home/yerenzter/Documents/[CERT. OF CUTTING] ${
                              data[index].fname
                            } ${data[index].mname} ${
                              data[index].lname
                            }-${new Date().getUTCDay()}${new Date().getUTCMonth()}${new Date().getUTCFullYear()}.pdf`,
                            displayLength: 2500,
                          });
                        }}
                      >
                        <a href="#">Barangay Cutting</a>
                      </li>
                      <li
                        onClick={() => {
                          CreateIndigency(
                            `${data[index].fname} ${data[index].mname} ${data[index].lname}`
                          );

                          M.toast({
                            text: `Document saved at /home/yerenzter/Documents/[CERT. OF INDIGNECY] ${
                              data[index].fname
                            } ${data[index].mname} ${
                              data[index].lname
                            }-${new Date().getUTCDay()}${new Date().getUTCMonth()}${new Date().getUTCFullYear()}.pdf`,
                            displayLength: 2500,
                          });
                        }}
                      >
                        <a href="#">Cert. of Indigency</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              )}
            </Loop>
          </tbody>
        </table>
      </div>
    </div>
  );
}
