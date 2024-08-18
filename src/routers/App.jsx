import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  ManageCertificates,
  ManageResidents,
  ManageUsers,
} from "../components";
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/" element={<Layout />}>
            <Route
              path="/manage/certificates"
              element={<ManageCertificates />}
            />
            <Route path="/manage/residents" element={<ManageResidents />} />
            <Route path="/manage/users" element={<ManageUsers />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
