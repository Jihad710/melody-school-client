import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation()
    console.log(location)
    const removeHeaderFooter = location.pathname.includes('login')
    return (
        <div>
          
           
           { removeHeaderFooter || <Navbar></Navbar>} 
            <Outlet></Outlet>
           { removeHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;