import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Dashboard from "./pages/Dashboard.jsx";
import RoleManager from "./pages/RoleManager.jsx";
import Customers from "./pages/Customers.jsx";
import Header from "./components/Header.jsx";
import AddCustomer from "./pages/AddCustomer.jsx";
import Schedule from "./pages/Schedule.jsx";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <Header/>
            <Routes>
                {/*<Route path="/dashboard" element={<App />}/>*/}
                <Route path="/" index element={<Dashboard/>}/>
                <Route path="/role-manager" element={<RoleManager/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/customer/new" element={<AddCustomer/> } />
                <Route path="/schedule" element={<Schedule/>} />
            </Routes>
        </BrowserRouter>
    )
