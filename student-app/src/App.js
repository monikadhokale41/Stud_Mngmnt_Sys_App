
import './App.css';
// bootstrap CSS link
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import StudentInfo from './components/StudentInfo';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewstudent" element={<StudentInfo/>} />
          <Route exact path="/addstudent" element={<AddStudent/>}></Route>
          <Route exact path="/editstudent/:id" element={<EditStudent/>}></Route>
          <Route exact path="/viewstudent/:id" element={<ViewStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
