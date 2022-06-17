import React from 'react';
import { NavLink } from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa'
import { AiFillDashboard } from "react-icons/ai";

function SideBar() {
 
  return(
    <div className='sidebar'>
 <ul className='listDive'>
 <li><img className='img-fluid' src="./images/logo.svg" alt="" /></li>
 <li><NavLink to='dashbordL' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"2px"}}/> Dashbord</NavLink></li>
 <li><NavLink to='editProfileL' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"2px"}}/>EditProfile</NavLink></li>
 <li><NavLink to='processTestL' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"2px"}}/>ProcessTest</NavLink></li>
 <li><NavLink to='viewTestL' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"2px"}}/>ViewTest</NavLink></li>

 </ul>
    </div>
  )
}

export default SideBar;
