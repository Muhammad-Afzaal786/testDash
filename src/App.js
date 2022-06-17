import "./Components/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar";
import Routes from "./routes";
import Footer from "./Components/Footer";
import { UserContextProvider } from "./UserContext";



export default function App() {
  return (
    <UserContextProvider>
   <div> 
      {/* <Navbar /> */}
        <Routes />
      {/* <Footer /> */}
  </div>
    </UserContextProvider>
   
  );
};





