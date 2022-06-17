import React  from "react";
import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext } from "../../../UserContext";
function NavBar() {
  const { user, setUser} = useContext(UserContext);

  const showData = ()=>{
    setUser(!user)
  }
  return (
    <div>
      <div className="NavBar">
      
       <AiOutlineMenu onClick={showData} className="closeBtn"/>
      </div>
    </div>
  );
}

export default NavBar;
