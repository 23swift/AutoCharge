import React from 'react'
import { NavLink } from 'react-router-dom';

const UtilitiesMenuList = () => {

    let activeClassName = "flex-sm-fill text-sm-left   nav-link  text-primary  text-decoration-underline py-1  p-1 text-info";
    let notActiveClassName = " nav-link p-1 text-info";
  return (
      <ul className="list-group list-group-flush w-100">
          <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                  <div className="fw-bold text-primary">
                      <div className='fs-5 '>
                          Utilities
                      </div >
                  </div>
                  <ul className="nav flex-column w-auto ">
                      <li className="nav-item">
                          <NavLink  to={`/utilities/merchRef`} className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          }>
                              <i className="bi bi-shop fs-5 me-2 "></i>

                              <div className='d-inline' >Merchant Reference
                              </div>

                          </NavLink>


                      </li>
                      <li className="nav-item">
                          <NavLink to={`/utilities/cardProd`} className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          }>
                              <i className="bi bi-credit-card fs-5 me-2"></i>

                              <div className='d-inline'>Card Product
                              </div>

                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          } to={`/utilities/declineCodes`}>
                              <i className="bi bi-code fs-5 text-primary me-2"></i>

                              <div className='d-inline'> Decline Reasons
                              </div>

                          </NavLink>
                      </li>
                      {/* <li className="nav-item">
                                          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                      </li> */}
                  </ul>
              </div>

          </li>
          {/* <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
              </div>

          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
              </div>

          </li> */}
      </ul>
  )
}

export default UtilitiesMenuList