import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import "./style.css"
import Logo from "./shape.png"
import { useState } from "react";
 
 
 
 
 
export default function SidebarLayout({ children }) {
    const[isOpen, setIsOpen]= useState(true)

    const toggleSidebar=()=>{
        setIsOpen(!isOpen)
    }
   
    return (
        <>
            <body>
                <nav className={`sidebar ${isOpen ? '' : 'close'}`}>
                    <header>
                        <div className="image-text">
                            <span className="image">
                                <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                            </span>
                            <div className="text header-text">
                                <span className="main">Sidebar</span>
                                <span className="sub">Components</span>
                            </div>
                        </div>
                        <span className="toggle" onClick={toggleSidebar}><ChevronRightIcon /></span>
                    </header>
                    <div className="menu-bar">
                        <div className="menu">
                            <ul className="menu-links">
                                <li className="search-bar">
                                    <span className="icons"><SearchIcon /></span>
                                    <input type="search" placeholder="Search..." />
                                </li>
                                <li className="nav-link">
                                    <Link to={'/home'} className="links">
                                        <span className="icons"><HomeIcon /></span>
                                        <span className="text nav-text"> Home</span>
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={'/about'} className="links">
                                        <span className="icons"><InfoIcon /></span>
                                        <span className="text nav-text"> About</span>
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={'/users'} className="links">
                                        <span className="icons"><PeopleIcon /></span>
                                        <span className="text nav-text"> Users</span>
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={'/contact'} className="links">
                                        <span className="icons"><ContactMailIcon /></span>
                                        <span className="text nav-text">Contact Us</span>
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={'/login'} className="links">
                                        <span className="icons"><AccountCircleIcon /></span>
                                        <span className="text nav-text">Login</span>
                                    </Link>
                                </li>
 
                            </ul>
                        </div>
                    </div>
                </nav>
                {children}
            </body>
 
        </>
    )
}