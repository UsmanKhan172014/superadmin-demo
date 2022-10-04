import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function Taables() {
    const [users, setUsers] = useState([]);

    const [tableRowsData, setTableRowsData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [searchName, setSearchname] = useState("");
    const [serachIndustry,setSearchIndustry]=useState("");

    const [searchEmail, setSearchemail] = useState("");
    const [searchTable, setSearchTable] = useState("");
    const [searchCompany, setSearchCompany] = useState("");
    const [randomData, setRandomData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            console.log("zzzzzzzzzzzzzzzzzzz");
            const data = await tempFunc();
        };
        fetch();
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    async function tempFunc() {
        // const querySnapshot = await getDocs(
        //   collection(db, "users"),
        //   // where("eventID", "==", localStorage.getItem("eventID"))
        // );
        const usersRef = collection(db, "users");
        const q = query(
            usersRef,
            where("eventID", "==", localStorage.getItem("eventID"))
        );
        const usersData = await getDocs(q);
        console.log(localStorage.getItem("eventID"));

        const w = usersData.docs.map((doc) => ({ ...doc.data() }));
        console.log(w);
        setUsers(w);
        setTableRowsData(w);
        setRandomData(w);
        setLoader(false);
    }

    const columns = [
        {
            name: (
                <div>
                    <b>Name</b>
                </div>
            ),
            // selector: (row) => row.name + " " + row.email,
            selector: (row) => row.name,
            // sortable: true,
        },


        {
            name: <b>Table No</b>,
            selector: (row) => row.tblNumber,
            sortable: true,
        },
        {
            name: <b>Email</b>,
            selector: (row) => row.email,
            //sortable: true,
            minWidth:"15%",
        },
        // {
        //   name: <b>Contact No</b>,
        //   selector: (row) => row.contactNo,
        //   //sortable: true,
        // },
        {
            name: <b>Company</b>,
            selector: (row) => row.company,
            //sortable: true,
            right: true,
        },

        {
            name: <b>Industry</b>,
            selector: (row) => row.industry,
            //sortable: true,
            right: true,
        },
    ];

    useEffect(() => {
        if (searchName || searchEmail || searchTable || searchCompany||serachIndustry) {
            let data = randomData;
            console.log("test", data);
            console.log("zubair");
            if (searchName) {
                data = data.filter((item) => {
                    if (
                        item.name
                            .toString()
                            .toLowerCase()
                            .includes(searchName.toLowerCase())
                    ) {
                        return item;
                    }
                });
                console.log(searchName, data);
            }
            if (searchEmail) {
                data = data.filter((item) => {
                    if (
                        item.email
                            .toString()
                            .toLowerCase()
                            .includes(searchEmail.toLowerCase())
                    ) {
                        return item;
                    }
                });
            }
            if (searchTable) {
                data = data.filter((item) => {
                    if (
                        item.tblNumber
                            .toString()
                            .toLowerCase()
                            .includes(searchTable.toLowerCase())
                    ) {
                        return item;
                    }
                });
            }
            if (serachIndustry) {
                data = data.filter((item) => {
                    if (
                        item.industry
                            .toString()
                            .toLowerCase()
                            .includes(serachIndustry.toLowerCase())
                    ) {
                        return item;
                    }
                });
                console.log( data);
            }
            setTableRowsData(data);
            setUsers(data);
            // setusersArmor(e.target.value);
            // } else {
            //   setUsers(randomData);
            // }
            console.log(searchName, searchEmail, searchTable, searchCompany,serachIndustry);
        } else {
            setUsers(randomData);
        }
    }, [searchName, searchEmail, searchTable, searchCompany,serachIndustry]);

    function clear() {
        console.log("HELLO");
        setSearchname("");
        setSearchemail("");
        setSearchTable("");
        setSearchCompany("");
        setSearchIndustry("");
        // setUsers(tableRowsDataTemp);
        // setTableRowsData(tableRowsDataTemp)
        console.log(tableRowsData);
    }

    return (
        <>
            <div>
                <Card
                    style={{ marginLeft: "45px", marginRight: "45px", marginTop: "20px" }}
                >
                    <CardHeader>
                        <div>
                            <h4>Filters</h4>
                        </div>
                        <Row>
                            <Col>
                                <h6>Name</h6>

                                <input className="form-control"
                                    type="text"
                                    onChange={(e) => {
                                        setSearchname(e.target.value);
                                    }}
                                    value={searchName}
                                    placeholder="Search User By Name"
                                />
                            </Col>
                            <div className="col">
                                <div>
                                    <h6>Email</h6>
                                    <input className="form-control"
                                        type="text"
                                        onChange={(e) => {
                                            setSearchemail(e.target.value);
                                        }}
                                        value={searchEmail}
                                        placeholder="Search User By Email"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h6>Table No</h6>
                                    <input className="form-control"
                                        type="text"
                                        onChange={(e) => {
                                            setSearchTable(e.target.value);
                                        }}
                                        value={searchTable}
                                        placeholder="Search User By Table No"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <h6>Company</h6>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setSearchCompany(e.target.value);
                                        }}
                                        value={searchCompany}
                                        placeholder="Search User By Company"
                                    />
                                </div>
                            </div>

                        </Row>

                        <div className="d-flex justify-content-end mt-3">
                            <button className="btn btn-parimary" onClick={clear}>Clear All</button>
                        </div>
                    </CardHeader>
                </Card>
            </div>

            <div style={{ marginRight: "45px", marginLeft: "45px", marginTop: "5%" }}>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h4 className="m-0">Users</h4>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <DataTable
                                    columns={columns}
                                    data={users}
                                    pagination
                                    progressPending={loader}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}
