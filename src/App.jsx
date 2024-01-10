import React from "react";
import { useState } from "react";

import { Routes, route } from "react-dom";

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

  return (
    <div className="wrapper">
      <Nav />

      
      <Home employees={employees} owners={owners} pets={pets} />

      <StaffList employees={employees} />
      <PetsList pets={pets} />
      <Footer />
    </div>
  );
}


{/* <Nav />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shows" >
    <Route index element={<ShowsIndex />} />
    <Route path='new' element={<ShowsNewForm />} />
    <Route path=":id" element={<Show />} />
    <Route path=":id/edit" element={<ShowsEditForm />} />
    </Route>
    <Route path="/movies" >
    <Route index element={<MoviesIndex />} />
    <Route path='new' element={<MoviesNewForm />} />
    <Route path=":id" element={<Movie />} />
    <Route path=":id/edit" element={<MoviesEditForm />} />

  </Route>
</Routes> */}



export default App;
