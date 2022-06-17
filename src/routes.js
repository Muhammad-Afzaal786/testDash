import React from "react";
import { Route, Routes  } from "react-router-dom";
// import LandingPage from "./views/LandingPage/LandingPage";
// import Services from "./views/Servic/Service";
// import LearnMore from "./views/Learn-More/LearnMore";
// import Location from "./views/Location/Location";
// import Login from "./views/Login-Signup/Login";
// import LoginDr from "./views/Login-Signup/loginDr";
// import LoginLab from "./views/Login-Signup/loginLab";
// import SignUp from "./views/Login-Signup/SignUp";
// import WhyChooseUs from "./views/ChooseUs/WhyChooseUs";
// import AboutDoctor from "./views/About/AboutDoctor";
// import AboutPatient from "./views/About/AboutPatient";
// import AboutLab from "./views/About/AboutLab";
// import Research from "./views/Offer/ResearchServices";
// import Specialist from "./views/Offer/SpecialistPortal";
// import LabConsulting from "./views/Offer/LabConsulting";
import ErrorPage from "./Components/ErrorPage";
// import PatientDashbord from "./PatientDashbord";
// import ConfirmOtp from "./views/Login-Signup/ConfirmOtp";
// import LabOTP from "./views/Login-Signup/LabOTP";
import DoctorDash from "./Components/Doctor/DoctorDash";
import Dashbord from './Components/Doctor/Pages/Dashbord'
import EditProfile from './Components/Doctor/Pages/EditProfile'
import OrderNewTest from './Components/Doctor/Pages/OrderNewTest'
import ViewTest from './Components/Doctor/Pages/ViewTest'
// import PatientDash from './Components/Patient/PatientDash'
// import PDashbord from './Components/Patient/Pages/PDashbord'
// import PEditProfile from './Components/Patient/Pages/OrderNewTest'
// import AdminDash from "./Components/Admin/AdminDash";
// import Doctors from './Components/Admin/Pages/Doctors'
// import Patient from './Components/Admin/Pages/Patients'
// import Laborateries from './Components/Admin/Pages/Laborateries'
// import Dashbords from './Components/Admin/Pages/Dashbord'
// import Tests from './Components/Admin/Pages/Tests'
// import LabDash from "./Components/Lab/LabDash";
// import DashbordL from "./Components/Lab/Pages/Dashbord";
// import EditProfileL from "./Components/Lab/Pages/EditProfile";
// import ProcessTestL from "./Components/Lab/Pages/ProcessTest";
// import ViewTestL from "./Components/Lab/Pages/ViewTest";



export default function routes() {
 
    return (
        <Routes>
            
            {/* <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/location" element={<Location />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logindr" element={<LoginDr />} />
            <Route path="/loginlab" element={<LoginLab />} />
            <Route path="/signup" element={<SignUp to="/login"/>} />
           
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/about-patient" element={<AboutPatient />} />
            <Route path="/about-laboratory" element={<AboutLab />} />
            <Route path="/research" element={<Research />} />
            <Route path="/specialist" element={<Specialist />} />
            <Route path="/lab-consulting" element={<LabConsulting />} />
            <Route path="/patient" element={<PatientDashbord />} />
            <Route path="/confirmotp" element={<ConfirmOtp />} />
            <Route path="/labotp" element={<LabOTP />} />

        <Route path="adminDash" element={<AdminDash />}>
            <Route  path="dashbords" element={<Dashbords />} />
            <Route  path="patient" element={<Patient />} />
            <Route  path="doctors" element={<Doctors />} />
            <Route  path="laborateries" element={<Laborateries />} />
            <Route  path="tests" element={<Tests />} />
            
        </Route> */}
           
        <Route path="/" element={<DoctorDash />}>
            <Route  path="dashbord" element={<Dashbord />} />
            <Route  path="editProfile" element={<EditProfile />} />
            <Route  path="ordernewtest" element={<OrderNewTest />} />
            <Route  path="viewtest" element={<ViewTest />} />
            
        </Route>
        {/* <Route path="patientdash" element={<PatientDash />}>
          <Route  path="PDashbord" element={<PDashbord />} />
          <Route  path="pEditProfile" element={<EditProfile />} />
          <Route  path="pOrdernewtest" element={<PEditProfile />} />
          <Route  path="pViewtest" element={<ViewTest />} />
          
        </Route>

        <Route path="labDash" element={<LabDash />}>
        <Route  path="dashbordL" element={<DashbordL />} />
         <Route  path="editProfileL" element={<EditProfileL />} />
         <Route  path="processTestL" element={<ProcessTestL />} />
         <Route  path="viewTestL" element={<ViewTestL />} />
        
       </Route> */}
           
            <Route  path="*" element={<ErrorPage />} />
        </Routes>
    );
}


 
    
   