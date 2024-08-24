import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { UserContract } from "../contracts/UserContract";

export function ToDoRegister(){


    let navigate = useNavigate();
    const formik = useFormik<UserContract>({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Mobile: ''
        },
        onSubmit : (values) => {
            axios.post('http://127.0.0.1:4000/adduser', values);
            alert('Registered Successfully..');
            navigate('/');
        } 
    })

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <form onSubmit={formik.handleSubmit} className="w-25 bg-dark p-2 text-white rounded rounded-2">
                <h2>Register New User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId" className="form-control" /></dd>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100">Register</button>
                <Link to="/" className="btn mt-2 btn-warning w-100">Existing User Login</Link>
            </form>
        </div>
    )
}