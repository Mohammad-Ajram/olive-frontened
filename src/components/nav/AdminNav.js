import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <ul className="nav flex-column admin-nav mt-2">
      <li className="text-center">
        <Link to="/all-properties" className="admin-nav-link">
          All Properties
        </Link>
      </li>
      <li className="text-center">
        <Link to="/add-property" className="admin-nav-link">
          Add a property
        </Link>
      </li>
    </ul>
  );
};

export default AdminNav;
