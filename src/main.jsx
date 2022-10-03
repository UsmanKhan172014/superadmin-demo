import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Dashboard from "./pages/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <Routes>
                {/*<Route path="/dashboard" element={<App />}/>*/}
                <Route path="/" index exact element={<Dashboard/> }/>
                </Routes>
            </BrowserRouter>
    )
