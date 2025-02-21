import { Link,useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./SideBar";
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation()
  const links = [
    {
        name:"Home",
        path: "/",
        icon: faHome
    },
    {
        name:"Recipes",
        path: "/recipes",
        icon:  faList
    },
    {
        name:"Settings",
        path: "/settings",
        icon: faCog
    }
  ]
    function cloceSidebar(){
        setShowSideBar(false)
    }
  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
            { links.map(link=>(
                <Link Link to={link.path} className= {location.pathname === link.path ? " active" : ""}  key={link.name}>{link.name}</Link>
            ))}
      
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
        { showSideBar && <Sidebar close={cloceSidebar} links={links} /> }
     
    </>
  );
}
