import { Link } from "react-router-dom";
import CreateEmploye from "./EmployeDetails";
const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <li>
            <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
          </li>
          <li>
            <Link to="/EmpList">EMPLOYEE LIST</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
