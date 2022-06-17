import React from 'react';
import { NavLink } from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa'
import { AiFillDashboard } from "react-icons/ai";

function SideBar() {
 

 
  return(
    
    <div className='sidebar'>
   
 <ul className='listDive'>
 <li><h5>Main</h5></li>
 <li><NavLink to='dashbord' activeClassName='active'>  <AiFillDashboard /> Dashbord</NavLink></li>
 <li><NavLink to='editProfile' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>Doctors</NavLink></li>
 {/* <li><NavLink to='ordernewtest' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>OrdeNewTest</NavLink></li>
 <li><NavLink to='viewtest' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>ViewTest</NavLink></li> */}
 </ul>
 <div>
 
 </div>
    </div>
  )
}

export default SideBar;
