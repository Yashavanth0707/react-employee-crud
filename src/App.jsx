import { useEffect, useState } from "react";
import Header from "./components/header";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmloyeeList from "./components/EmployeList";
import CreateEmploye from "./components/EmployeDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/CreateEmployee" Component={CreateEmploye} />
          <Route path="/EditEmployee/:id" Component={CreateEmploye} />
          <Route path="/EmpList" Component={EmloyeeList} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
