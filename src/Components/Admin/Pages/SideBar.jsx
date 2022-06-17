import React from 'react';
import { NavLink } from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa'
import { AiFillDashboard } from "react-icons/ai";

function SideBar() {
  return(
    <div className='sidebar'>
 <ul className='listDive'>
 <li><img className='img-fluid' src="./images/logo.svg" alt="" /></li>

 <li><NavLink to='dashbords' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"0px"}}/> Dashbord</NavLink></li>
 <li><NavLink to='doctors' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"4px"}}/>Doctors</NavLink></li>
 <li><NavLink to='laborateries' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"4px"}}/>Laborateries</NavLink></li>
 <li><NavLink to='patient' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"4px"}}/>Patients</NavLink></li>
 <li><NavLink to='tests' activeClassName='active'><AiFillDashboard style={{color:"black",marginRight:"4px"}}/>Tests</NavLink></li>

 </ul>
    </div>
  )
}

export default SideBar;
