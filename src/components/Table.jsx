import React, {useState, useEffect, Fragment} from "react";


function Table() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
            async function fetchCustomers() {
                const response = await fetch('http://127.0.0.1:5000/getCustomers');
                const data = await response.json();
                setCustomers(data);
            }

            fetchCustomers();
        }, []
    );
    return (
        <Fragment>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Password</th>
                    <th>contact</th>
                    <th>Expiry</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => {
                        return (
                            <tr>
                                <td>{customer.name}</td>
                                <td>{customer.password}</td>
                                <td>{customer.contact}</td>
                                <td>{customer.expiry}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                )
                }

                </tbody>
            </table>

        </Fragment>
    )
}

export default Table;