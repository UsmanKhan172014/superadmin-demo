import {Link} from "react-router-dom";
import Customers from "../pages/Customers.jsx";

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Super Admin</h2>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                <ul className="nav justify-content-center bg-secondary p-1">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item text-white">
                        <Link  className="nav-link text-white" to="/role-manager">Role Manager</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-white" to="/customers">Customer Manager</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link text-white" to="/schedule">Schedule Manager</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;