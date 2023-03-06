import React,{useEffect} from 'react'
import bdoLogo from '../assets/img/BDOLogo.png'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'


import { NavLink,Link  } from "react-router-dom";
import { MobileMenu } from './MobileMenu/MobileMenu';


const MainNav = () => {

    // let activeStyle = {
    //     // textDecoration: "underline",
    //     backgroundColor: "#ffc107"
    //     ,color:'var(--bs-link-color)'
    //     ,fontWeight:'bold'
    // };
    let activeClassName = "flex-sm-fill text-sm-left ps-2 nav-link bg-secondary text-primary  border-secondary shadow-sm ";
    let notActiveClassName ="flex-sm-fill text-sm-left ps-2 nav-link";
    return (
        <div>

            <nav className="navbar navbar-expand-lg border-bottom  py-3">
                <div className="container-fluid  ">
                    <div className="navbar-brand ">
                        <img src={bdoLogo} alt="" width={100} height={48} className="m-0 d-none d-lg-inline" />
                    <img src={bdoLogo} alt="" width={85} height={40} className="m-0 d-inline d-lg-none" />
                    </div>
                    
                        

                    
                    <MobileMenu id="offcanvasExample" />
                    <div className="collapse navbar-collapse   p-2 rounded"  >
                        <ul className="navbar-nav  nav-pills  me-5" id='myTab'>
                            <li className="nav-item mx-1">
                                {/* <Link id="dash" className="flex-sm-fill text-sm-left ps-sm-2 nav-link " to={`/`} aria-current="page" >Dashboard</Link> */}

                                <NavLink 
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : notActiveClassName
                                    }
                                >
                                    Dashboard
                        </NavLink>
                            </li>
                            <li className="nav-item mx-1">
                              
                                <NavLink 
                                    to="/utilities" 
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : notActiveClassName
                                    }
                                >
                                    Utilities
                        </NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <a  id='trans' className="flex-sm-fill text-sm-left ps-sm-2 nav-link " href="#">Transasctions</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a  id='sec' className="flex-sm-fill text-sm-left ps-sm-2 nav-link ">Security</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a  id='inq' className="flex-sm-fill text-sm-left ps-sm-2 nav-link ">Inquiry</a>
                            </li>
                        </ul>
                       <form className="d-flex w-100">
                        <input className="form-control me-2 w-100" type="search" placeholder="Please enter the card number" aria-label="Search" />
                        <button className="btn btn-info btn-sm px-3" type="submit">
                            
                                <i className="bi bi-search"></i></button>
                    </form>
                    </div>
                    <div className='d-flex  d-lg-none w-75'>
                        
                        <form className="d-flex w-100 me-2">
                            <input className="form-control me-2 w-100" type="search" placeholder="Please enter the card number" aria-label="Search" />
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                         <button className="navbar-toggler  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    </div>
                   
                </div>
            </nav>


          
        </div>

    )
}

export default MainNav
