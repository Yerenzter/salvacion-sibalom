import { useEffect, useState } from "react";
import { M, Tick } from "../lib";
import Login, { SetPage } from "./Login";

export default function Home() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
  };

  return (
    <>
      <Login />

      <div className="row p-5 h-screen">
        <div className="col s12 m8 lg12">
          <h1 className="home-title">BIS</h1>
          <p className="text-3xl">Barangay Information System</p>
          <br />
          <p className="text-2xl">
            The Barangay Information System designed to streamline the
            collection, storage and retrieval of resident information making
            administrative task certificate issuance more efficient and ensuring
            data security and accessibility for barangay officials.
          </p>

          <div className="py-5">
            <button
              className="btn-large waves-effect bg-green modal-trigger"
              data-target="login"
              onClick={() => SetPage("/manage/residents")}
            >
              Residents
            </button>

            <button
              className="btn-large waves-effect bg-green mx-5 modal-trigger"
              data-target="login"
              onClick={() => SetPage("/manage/certificates")}
            >
              Certificates
            </button>
          </div>
        </div>

        <div className="col s12 m4 grid text-center home-info p-5  h-auto">
          <p className="text-3xl">Total Population</p>
          <p className="text-6xl bis-green p-0">5</p>
          <p className="text-3xl">Registered Voters</p>
          <p className="text-6xl bis-green p-0">3</p>
          <p className="text-3xl">Male</p>
          <p className="text-6xl bis-green p-0">3</p>
          <p className="text-3xl">Female</p>
          <p className="text-6xl bis-green p-0">2</p>
        </div>
      </div>
    </>
  );
}
