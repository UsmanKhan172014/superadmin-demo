function Table(){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Role</th>
                    <th>Added By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Admin</td>
                    <td>Super Admin</td>
                    <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export  default Table;