import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    let activeClassName = "flex-sm-fill text-sm-left ps-sm-2  nav-link bg-secondary text-primary rounded-end";
    let notActiveClassName = "ps-sm-0 ps-lg-2 nav-link ";
  return (
    
         
          <div className='mt-4   pe-1 ' style={{ height: 500 }} >
          <ul className="navbar-nav flex-column p-0 utilities-nav">
                  <li className="nav-item">
                      <div className="ms-1 me-auto">
                          <NavLink to={`/utilities/merchRef`} className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          }>
                              <i className="bi bi-shop fs-5 me-2"></i>
                             
                          <div className='d-none d-lg-inline'>Merchant Reference
                                 </div> 

                          </NavLink>


                      </div>

                  </li>
                  <li className="nav-item">
                      <div className="ms-1 me-auto">
                          <NavLink to={`/utilities/cardProd`}
                              className={({ isActive }) =>
                                  isActive ? activeClassName : notActiveClassName
                              }
                          >
                              <i className="bi bi-credit-card fs-5 me-2"></i>

                          <div className='d-none d-lg-inline'>Card Products
                              </div> 
                              

                          </NavLink>

                      </div>

                  </li>
                  <li className="nav-item">
                      <div className="ms-1 me-auto">
                          <NavLink className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          } to={`/utilities/declineCodes`}>
                              <i className="bi bi-code fs-5 text-primary me-2"></i>
                             
                          <div className='d-none d-lg-inline'> Decline Reasons
                              </div> 
                              
                              </NavLink>


                      </div>

                  </li>
              </ul>
              </div>
      
      
  )
}

export default Nav