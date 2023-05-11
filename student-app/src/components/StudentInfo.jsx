import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function StudentInfo() {

    const [students, setStudent] = useState([])

    const id = useParams()

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
          const response = await axios.get('http://localhost:8056/student/getAll');
          setStudent(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    const deleteStudent = async (id)=>{
        await axios.delete(`http://localhost:8056/student/delete/${id}`)
        loadStudents()
    }
    

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow" >
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => (
                                <tr key={student.id}>
                                    {/* <th scope="row" key={student.id}></th> */}
                                    <td>{student.username} </td>
                                    <td>{student.name}</td>
                                    <td>{student.email} </td>
                                    <td>{student.address}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewstudent/${student.id}`}>View</Link>
                                        
                                        <Link className="btn btn-outline-primary mx-2"
                                        to={`/editstudent/${student.id}`}
                                        >Update</Link>
                                         
                                        <button className="btn btn-danger mx-2"
                                        onClick={()=> deleteStudent(student.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default StudentInfo


 // const loadStudents = async() => {
    //     const result = await axios.get("localhost:8056/student/getAll")
    //     setStudent(result.data);
    //     // console.log(result.data)
    // }