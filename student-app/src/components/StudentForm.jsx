// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { Container } from '@mui/material';
// import { useState } from 'react';
// import Button from '@mui/material/Button';


// function StudentForm() {

//   const [name, setName] = useState('')
//   const [address, setAddress] = useState('')

//   const handleClick = (e)=>{
//     // e.preventDefault()
//     const student =[name,address]
//     console.log(student)
//     fetch("http://localhost:8056/student/add",{
//       method:"POST",
//       headers:{"Content-type":"application/JSON"},
//       body:JSON.stringify(student)
//     }).then(()=>{
//       console.log("Student is added")
//     })
//   }
//   return (

//     <Container>
//       <h1 style={{ color: "grey" }}>Add Student</h1>
//       <form>
//         <div className="container">
//           <div className="row justify-content-center m-3">
//             <div className="col-6 mb-3">
//               <TextField  id="outlined-basic" label="Stud Name" variant="outlined"
//                 value={name} onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="col-6 mb-3">
//               <TextField id="outlined-basic" label="Address" variant="outlined"
//                 value={address} onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
//             <div>
//                <Button variant="contained" onClick={handleClick()}>Submit</Button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </Container>
//   );
// }
// export default StudentForm






