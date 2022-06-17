import NavBar from './Pages/NavBar';
import { Outlet } from 'react-router';
import SideBar from './Pages/SideBar';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';


//import { AiOutlineMenu } from "react-icons/ai";
const DoctorDash = () => { 
  const {user} = useContext(UserContext)
  return(
   <div>
  <NavBar/>
  <div className="flex">

 {user &&
    <SideBar/>
  }
  <Outlet/>
  </div>
   
   </div>
  )
};

export default DoctorDash;