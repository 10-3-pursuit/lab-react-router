import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom"

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
      <main>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/staff" component={StaffList} />
          <Route path="/pets" exact render={() => <Redirect to="/pets/cats" />} />
          <Route path="/pets/cats" render={() => <PetsList animalType="cats" />} />
          <Route path="/pets/dogs" render={() => <PetsList animalType="dogs" />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
