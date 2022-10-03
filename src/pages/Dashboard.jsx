import Header from '../components/Header'
import Cards from "../components/Cards";

function Dashboard(){
    return (
        <div>
            <Header/>
            <Cards title="Total" count="100"/>
        </div>
    )
}
export default Dashboard;