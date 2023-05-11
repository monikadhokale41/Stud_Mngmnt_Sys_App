import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AddStudent() {

    //this will navigate to other page after button click
    let navigate = useNavigate()

    const [student, setStudent] = useState({
        name: "",
        username: "",
        email: "",
        address: ""
    })

    const { name, username, email, address } = student

    const onInputChange = (e) => {
        // ... is spread operator which will add new object tu student
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const onSubmit =async (e) => {
        //prevent default prevents from showing weird url
        e.preventDefault();
        // axios is used to post data
        await axios.post("http://localhost:8056/student/add", student)
        navigate("/viewstudent");
    }
      
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Student</h2>
                    <form onSubmit ={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlfor="Name" className="form-label">Name</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Name" name="name" value={name} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlfor="Username" className="form-label">Username</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Username" name="username" value={username} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlfor="Email" className="form-label">Email ID</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Email" name="email" value={email} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlfor="Address" className="form-label">Address</label>
                            <input type={"text"} className="form-control" placeholder="Enter your Address" name="address" value={address} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                            <Link  className="btn btn-outline-danger mx-2" to="/viewstudent">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddStudent


