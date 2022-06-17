import React,{useContext}  from 'react';
import NavBar from './Pages/NavBar';
import { Outlet } from 'react-router';
import SideBar from './Pages/SideBar';
import { UserContext } from '../../UserContext';
const PatientDash = () => { 
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
    <div>
    
    </div>
   </div>
  )
};

export default PatientDash;