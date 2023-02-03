import React from 'react'
import { NavLink } from 'react-router-dom';

const TransactionMenuList = () => {
    let activeClassName = " flex-sm-fill text-sm-left   nav-link  text-primary bg-secondary rounded p-1";
    let notActiveClassName = "  nav-link p-1 ";
  return (
      <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                  <div className="fw-bold text-primary">
                      <div className='fs-5 '>
                          Transactions
                      </div >
                  </div>
                  <ul className="nav flex-column">
                      <li className="nav-item">
                          <NavLink to={``} className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          }>
                              <i className="bi bi-file-earmark-text fs-5 me-2"></i>

                              <div className='d-inline'>Autocharge Application
                              </div>

                          </NavLink>


                      </li>
                      <li className="nav-item">
                          <NavLink to={``} className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          }>
                              <i className="bi bi-file-earmark-check fs-5 me-2"></i>

                              <div className='d-inline'>Approvals
                              </div>

                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          } to={``}>
                              <i className="bi bi-list-check fs-5 text-primary me-2"></i>

                              <div className='d-inline'> Enrolled/Unenrolled
                              </div>

                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className={({ isActive }) =>
                              isActive ? activeClassName : notActiveClassName
                          } to={``}>
                              <i className="bi bi-list-task fs-5 text-primary me-2"></i>

                              <div className='d-inline'>  Batch Enrollment
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

export default TransactionMenuList