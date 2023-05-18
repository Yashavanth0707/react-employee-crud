import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CreateEmploye = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [doj, setDOJ] = useState("");
  const [department, setDepartment] = useState("");
  const { id: empId } = useParams();

  //   console.log(empId);

  const employee = {
    name,
    gender,
    dob,
    doj,
    department,
  };

  useEffect(() => {
    if (empId) getEmployee();
  }, []);

  const getEmployee = async () => {
    // if (empId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/employees/${empId}`
      );
      //   console.log(response.data);
      setName(response.data.name);
      setGender(response.data.gender);
      setDOB(response.data.dob);
      setDOJ(response.data.doj);
      setDepartment(response.data.department);
    } catch (error) {
      console.error(error);
    }
    // }
  };

  const saveEmployee = async () => {
    try {
      const data = await axios.post(
        "http://localhost:3000/employees",
        employee
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (empId) {
      await axios.put(`http://localhost:3000/employees/${empId}`, employee);
    } else {
      saveEmployee();
    }
    // saveEmployee();
    setName("");
    setGender("");
    setDOB("");
    setDOJ("");
    setDepartment("");
  };

  return (
    <>
      <h2>{empId ? "Edit" : "Create"} Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Joining:
          <input
            type="date"
            value={doj}
            onChange={(e) => setDOJ(e.target.value)}
          />
        </label>
        <br />
        <label>
          Department:
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="Govt">Govt</option>
            <option value="Finance">Finance</option>
            <option value="helath">Health</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default CreateEmploye;
