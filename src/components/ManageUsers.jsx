export default function ManageUsers() {
    return (
      <div className="row">
        <div className="col s12 p-5">
          <div className="row">
            <div className="col s9">
              <h1 className="text-3xl bis-green">Manage Users</h1>
            </div>
  
            <div className="col s3 flex items-center">
              <button className="btn bg-green waves-effect text-white p-3 mx-5">
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
                  <tr>
                    <td>1</td>
                    <td>admin</td>
                    <td>admin</td>
                    <td>Admin</td>
                    <td>June 1, 2024</td>
                    <td>
                      <button className="btn waves-effect bg-blue-950 p-3 mx-2">
                        <i className="material-icons">edit</i>
                      </button>
                      <button className="btn waves-effect bg-red-500 p-3 mx-2">
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  