import axios from "axios";
import { useEffect, useState } from "react";

let page = "";

export function SetPage(pageXYZ) {
  return (page = pageXYZ);
}

export default function Login() {
  useEffect(() => {
    Authenticate();
  }, []);

  const [data, sendData] = useState({});

  const Authenticate = async () => {
    const res = await axios.get("http://localhost:4435/accounts/login");

    sendData(res.data);
  };

  const Authorize = (e) => {
    e.preventDefault();

    for (let r = 0; r < data.length; r++) {
      while (
        e.target.username.value === data[r].username &&
        e.target.password.value === data[r].passphrase
      ) {
        if (
          data[r].role === "System" ||
          data[r].role === "Admin" ||
          data[r].role === "Personnel"
        )
          return (window.location.href = page);

        return (window.location.href = "/");
      }
    }
    return alert("Wrong password or account does not exist.");
  };
  return (
    <div id="login" className="modal w-1/3">
      <div className="modal-content">
        <div className="col s12 m4 grid justify-center center-align">
          <h1 className="text-5xl mb-10">Login</h1>

          <form onSubmit={Authorize}>
            <div className="input-field outlined mb-3">
              <input
                id="username"
                name="username"
                className="form-control"
                placeholder="Username or email"
              />
            </div>

            <div className="input-field outlined mb-7">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="btn waves-effect bg-green w-full flex justify-center mb-10"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
