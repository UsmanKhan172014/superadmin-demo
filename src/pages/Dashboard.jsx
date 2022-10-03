import Header from '../components/Header'
import Cards from "../components/Cards.jsx";


function Dashboard(){
    return (
        <div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-4">
                        <Cards title="Total Customers" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Expired Customers" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Total Active Customer" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Total Inactive Customers" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Direct Admin Clients" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Direct Manager Clients" count="100"/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <Cards title="Direct Agent Clients" count="50"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;