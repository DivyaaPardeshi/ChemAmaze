import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './Layout.css';
import Preloader from "../Preloader/Preloader.jsx";
import Footer from "../Footer/Footer";

const Layout = () => {
    return ( 
        <>
            <div className="layout">
                        <Preloader/>                    
                        <Navbar/>
                        <Outlet/>
            </div>
        </>
     );
}
 
export default Layout;