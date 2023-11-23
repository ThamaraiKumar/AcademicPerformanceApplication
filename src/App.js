import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login';
import SideBar from './Components/SideBar';
import Add from './DashBoardComponents/Add';
// import Home from './DashBoardComponents/Home';
import Performance from './DashBoardComponents/Performance';
import DashBoardContent from './DashBoardComponents/DashBoardContent';
import ShowStaff from './DashBoardComponents/ShowStaff';
import AcademicPerformanceWebsite from './Components/AcademicPerformanceWebsite';
import TermsAndCondition from './Components/FooterContent/TermsAndCondition';
import PrivacyPolicy from './Components/FooterContent/PrivacyPolicy';
import FAQ from './Components/FooterContent/FAQ';
import AddStudent from './Components/StaffComponent/AddStudent'
import Courses from './Components/StaffComponent/Courses';
import AddCourse from './Components/StaffComponent/AddCourse';
import StudentDetails from './Components/StaffComponent/StudentDetails';
import StaffProfile from './Components/StaffComponent/StaffProfile';
import Attendance from './Components/StaffComponent/Attendance';
import StudentDashBoard from './Components/StudentComonent/StudentDashBoard';
import ViewCourse from './Components/StudentComonent/ViewCourse';
import JoinCourse from './Components/StudentComonent/JoinCourse';
import ViewAssignment from './Components/StudentComonent/ViewAssignment';
import AddAssignment from './Components/StaffComponent/AddAssignment';
import ViewAttendance from './Components/StudentComonent/ViewAttendance';
import MyProfile from './Components/StudentComonent/MyProfile';
import StaffRegistration from './Components/StaffRegistration';
import StudentRegistration from './Components/StudentRegistration';
import NotFound from './Components/NotFound';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    
    <Route path="/" element={<AcademicPerformanceWebsite/>}/>
    <Route path="/staffdashboard" element={<StaffProfile/>}/>
    <Route path="/studentdashboard" element={<StudentDashBoard/>}/>
    <Route path="/*" element={<NotFound/>}/>
    <Route path="/studentdetails" element={<StudentDetails/>}/>
    <Route path="/attendance" element={<Attendance/>}/>
    <Route path="/view/attendance" element={<ViewAttendance/>}/>
    <Route path="/staffprofile" element={<StaffProfile/>}/>
    <Route path="/viewcourse" element={<Courses/>}/>
    <Route path="/student/viewcourse" element={<ViewCourse/>}/>
    <Route path="/addcourse" element={<AddCourse/>}/>
    <Route path="/joincourse" element={<JoinCourse/>}/>
    <Route path="/addstudent" element={<StudentRegistration/>}/>
    <Route path="/addstudent-registered" element={<AddStudent/>}/>
    <Route path="/home" element={<SideBar/>}/>
    <Route path="/add" element={<StaffRegistration/>}/>
    <Route path="/addstaff" element={<Add/>}/>

    <Route path="/myprofile" element={<MyProfile/>}/>

    <Route path="/view/assignment" element={<ViewAssignment/>}/>
    <Route path="/add/assignment" element={<AddAssignment/>}/>


    <Route path="/logout" element={<Login/>}/>
    <Route path="/performance" element={<Performance/>}/>
    <Route path="/dashboard" element={<DashBoardContent/>}/>
    <Route path="/showstaff" element={<ShowStaff/>}/>
    <Route path="/apw" element={<AcademicPerformanceWebsite/>}/>
    <Route path="/termsandconditions" element={<TermsAndCondition/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;


