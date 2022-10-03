import {Link} from "react-router-dom";

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
                        <a className="nav-link text-white" href="#">Role Manager</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Customer Manager</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Schedule Manager</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;