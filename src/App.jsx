import React from "react";
import { useState,useEffect } from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom"

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname === "/pets" || location.pathname === "/pets/") {
      navigate("/pets/cats");
    }
  }, [location.pathname, navigate]);
  
  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        <Route
          path="/staff"
          element={<StaffList employees={employees} />}
        />
        <Route path="/pets">
          <Route index element={<PetsList pets={pets}/>}/>
          <Route path=":kind" element={<PetsList pets={pets}/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
