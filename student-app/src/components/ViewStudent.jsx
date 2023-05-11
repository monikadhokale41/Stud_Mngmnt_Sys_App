import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function ViewStudent() {

    const [student, viewStud] = useState({
        username: "",
        name: "",
        email: "",
        address: "",
      });
      

    const {id}=useParams();

    //empty array as secnd parameter passed to ensure that loadStudent is only called once (when the component mounts)
    useEffect(()=>{
        loadStudent()
    }, [])

    //fetch data of perticular student with id and if there is error then show it on console
    const loadStudent = async () => {
        try {
          const response = await axios.get(`http://localhost:8056/student/${id}`);
          viewStud(response.data);
        } catch (error) {
          console.log(error);
        }
    };
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Student Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of student: {id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" key="username">
                                <b>Username:</b>
                                {student.username}
                            </li>

                            <li className="list-group-item" key="name">
                                <b>Name:</b>
                                {student.name}
                            </li>

                            <li className="list-group-item" key="email">
                                <b>Email:</b>
                                {student.email}
                            </li>
                            
                            <li className="list-group-item" key="address">
                                <b>Address:</b>
                                {student.address}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2' to={"/viewstudent"}>Go Back</Link>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent

// const loadStudent=async()=>{
    //     const result=await axios.get(`localhost:8056/student/${id}`)//localhost:8056/student/9
    //     viewStud(result.data)
    // }