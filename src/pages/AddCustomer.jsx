import {useState} from "react";
import {useNavigate} from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCustomer() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await fetch('http://localhost:5000/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, password, contact, expiry})
        })
        const data = await userData.json();
        if (!data.error) {
            // toast.success('Customer Added Successfully');
            alert('Customer Added Successfully');
            return navigate('/customers')
        } else {
            // toast.error(data.error);
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Add Customer</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" placeholder="setName"
                                               onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" id="password" placeholder="password"
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="date" className="form-control" id="expiry" placeholder="Expiry"
                                               onChange={(e) => setExpiry(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Contact</label>
                                        <input type="text" className="form-control" id="contact" placeholder="contact"
                                               onChange={(e) => setContact(e.target.value)}/>
                                    </div>
                                    <div className="form-group text-center mt-2">
                                        <button onClick={handleSubmit} className="btn btn-primary">Add User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<ToastContainer/>*/}
        </div>

    )
}

export default AddCustomer;