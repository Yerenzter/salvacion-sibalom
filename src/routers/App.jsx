import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, ManageResidents, ManageUsers } from "../components";
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/manage/residents" element={<ManageResidents />} />
            <Route path="/manage/users" element={<ManageUsers />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
