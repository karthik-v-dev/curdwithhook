import "./App.css";
import {Routes,Route,Link} from 'react-router-dom';
import Employeedb from './components/EmployeeDB';
import Employeeform from './components/EmployeeFrom';
import Employeedetails from "./components/EmployeeDetails";
import EmployeeUpdate from "./components/EmployeeUpdate";
function App() {
  return (
    <div className="App">
      <nav className="Nav_list">
        <Link to="/" >EmployeeForm</Link>
        <Link to="/employeedb" >EmployeeDB</Link>
        <Link to="/employeedetails" >EmployeeDetails</Link>
        <Link to="/employeeupdate" >EmployeeUpdata</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Employeeform/>}/>
        <Route path="/employeedb" element={<Employeedb/>}/>
        <Route path="/employeedetails" element={<Employeedetails/>}/>
        <Route path="/employeedetails/:id" element={<Employeedetails/>}/>
        <Route path="/employeeupdate/:id" element={<EmployeeUpdate/>}/>
      </Routes>
      {/* <div className="App"></div> */}
    </div>
  );
}

export default App;
