import Table from "../components/Table.jsx";
import {useState} from "react";
import DataTable from 'react-data-table-component';

const data = []

function RoleManager() {
    const [columns, setColumns] = useState([
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ]);

    const [data, setData] = useState(
        [{
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
            {
                id: 2,
                title: 'Ghostbusters',
                year: '1984',
            },]
    )

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2>Role Manager</h2>
                    </div>
                </div>
                <DataTable columns={columns} data={data}/>
            </div>
        </div>

    )
}

export default RoleManager;