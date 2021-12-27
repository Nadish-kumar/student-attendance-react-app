import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Table from './Table';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Form from './Form';



function App() {
  return (
    <div id="wrapper">
   <BrowserRouter>
   <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
      <Topbar />
          <div class="container-fluid">
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/report" element={<Table/>} />
          <Route path='/report/:id' element={<Attendance/>} />
          <Route path='/add-attendance/:id' element={<Form />} />
            
              </Routes> 
          </div>
        </div>
      </div>
      </BrowserRouter>
  </div>
  );
}

export default App;
