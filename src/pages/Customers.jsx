import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Table from "../components/Table.jsx";
function Customers(){
    let navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Customers</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <button onClick={()=>navigate('/customer/new')} className="btn btn-primary">Add Customer</button>
                    <button className="btn btn-primary">Add Dummy Customer</button>
                    <button className="btn btn-primary">Remove Dummy Customers</button>
                    <button className="btn btn-primary">Active Accounts</button>
                    <button className="btn btn-primary">inActive Accounts</button>
                    <button className="btn btn-primary">Expired Accounts</button>
                </div>
            </div>
            <Table/>


        </div>
    )
}
export default Customers;