import * as React from 'react';

import { Link } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Appbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ml-3" href="#">Student Management System</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/viewstudent">View Students </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/addstudent">Add Student </a>
            </li>
            {/* <li>
              <Link className="btn btn-outline-light mr-2" to="/addstudent">Add Student</Link>
            </li> */}
            <li>
              <button className="btn btn-outline-secondary my-button" style={{ marginLeft: '500px' }} type="submit">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Appbar