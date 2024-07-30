export default function Login() {
  return (
    <div id="login" className="modal w-1/3">
      <div className="modal-content">
        <div className="col s12 m4 grid justify-center center-align">
            <h1 className="text-5xl mb-10">Login</h1>

        <form>
          <div className="input-field outlined mb-3">
            <input
              id="username"
              className="form-control"
              placeholder="Username or email"
            />
          </div>

          <div className="input-field outlined mb-7">
            <input type="password" id="password" className="form-control" placeholder="Passoword" />
          </div>

          <button className="btn waves-effect bg-green w-full flex justify-center mb-10">Login</button>
        </form>
        </div>
      </div>
    </div>
  );
}
