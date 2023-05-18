import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmloyeeList = () => {
  const [emploayeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  // added test comment
  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    const response = await axios.get("http://localhost:3000/employees");
    const employees = response.data;
    setEmployeeList(employees);
  };

  const handleDelete = async (x) => {
    if (
      confirm(`Are you sure you want to delete this employee: ${x.name}?`) ==
      true
    ) {
      try {
        await axios.delete(`http://localhost:3000/employees/${x.id}`);
        getAllEmployees();
        //   console.log(respond);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = async (id) => {
    navigate(`/EditEmployee/${id}`);
  };

  //   const handleDelete = (id) => {
  //     empDelete(id);
  //   };

  return (
    <>
      <div>
        <h2>Emloyees List</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>serial no</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Date of Joining</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {emploayeeList.map((x, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{x.name}</td>
                <td>{x.gender}</td>
                <td>{x.dob}</td>
                <td>{x.doj}</td>
                <td>{x.department}</td>
                <td>
                  <button onClick={() => handleEdit(x.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(x)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmloyeeList;
