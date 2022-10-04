import React, {useState, useEffect, Fragment,useMemo} from "react";
import DataTable from 'react-data-table-component';

function Table() {
    useEffect(() => {
            async function fetchCustomers() {
                const response = await fetch('http://127.0.0.1:5000/getCustomers');
                const data = await response.json();
                setCustomers(data);
            }

            fetchCustomers();
        }, []
    );
    const [customers, setCustomers] = useState([]);
    const [columns, setColumns] = useState([
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Password',
            selector: row => row.password,
        },
        {
            name: 'Contact',
            selector: row => row.contact,
        },
        {
            name: 'Expiry',
            selector: row => row.expiry,
        },
    ]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = customers.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );


    // const subHeaderComponentMemo = useMemo(() => {
    //     const handleClear = () => {
    //         if (filterText) {
    //             setResetPaginationToggle(!resetPaginationToggle);
    //             setFilterText('');
    //         }
    //     };
    //
    //     return (
    //         <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    //     );
    // }, [filterText, resetPaginationToggle]);
    return (

        <DataTable
            title="Customers"
            columns={columns}
            data={customers}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            // subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead

        />
        // <Fragment>
        //     <table className="table">
        //         <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Password</th>
        //             <th>contact</th>
        //             <th>Expiry</th>
        //             <th>Action</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {customers.map((customer) => {
        //                 return (
        //                     <tr>
        //                         <td>{customer.name}</td>
        //                         <td>{customer.password}</td>
        //                         <td>{customer.contact}</td>
        //                         <td>{customer.expiry}</td>
        //                         <td>
        //                             <button className="btn btn-primary">Edit</button>
        //                             <button className="btn btn-danger">Delete</button>
        //                         </td>
        //                     </tr>
        //                 )
        //             }
        //         )
        //         }
        //
        //         </tbody>
        //     </table>
        //
        // </Fragment>
    )
}

export default Table;