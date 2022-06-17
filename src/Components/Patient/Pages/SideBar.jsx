import React from 'react';
import { NavLink} from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa'
import { AiFillDashboard } from "react-icons/ai";

function SideBar() {
  return(
    <div className='sidebar'>
   
 <ul className='listDive'>
 <li><img className='img-fluid' src="./images/logo.svg" alt="" /></li>
 <li><NavLink to='PDashbord' activeClassName='active'>  <AiFillDashboard /> Dashbord</NavLink></li>
 <li><NavLink to='pEditProfile' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>EditProfile</NavLink></li>
 <li><NavLink to='pOrdernewtest' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>OrdeNewTest</NavLink></li>
 <li><NavLink to='pViewtest' activeClassName='active'><AiFillDashboard className='active' style={{color:"black",marginRight:"4px"}}/>ViewTest</NavLink></li>
 </ul>
 <div>
 
 </div>
    </div>
  )
}

export default SideBar;
