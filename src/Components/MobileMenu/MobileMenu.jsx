import React from 'react'
import PageHeader from '../PageHeader';
import { NavLink } from 'react-router-dom';
import UtilitiesMenuList from './UtilitiesMenuList';
import TransactionMenuList from './TransactionMenuList';
import './MobileNav.scss'

import bdoLogo from '../../assets/img/BDOLogo.png'
export const MobileMenu = (props) => {
    const{id}=props;
    
  return (
      <div className="d-lg-none offcanvas offcanvas-top" tabIndex="-1" id={id} aria-labelledby="offcanvasExampleLabel">
       <div className="container-fluid">
             <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasExampleLabel">
                 <div className="d-flex align-items-center">

                      <img src={bdoLogo} alt="" width={90} height={40} className="m-0 d-inline d-lg-none" />
                  <PageHeader title="Main menu"/>
                 </div>
              </div>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          
          </div>
                  <hr />
          <div className="offcanvas-body">
              <div className="container-fluid">
                  <div className="row ">
                      <div className="col-12 col-sm-6 col-lg-3 ">
                          <UtilitiesMenuList/>
                          <hr className='d-sm-none' />
                      </div>
                      <div className="col-12 col-sm-6 col-lg-3">
                          <TransactionMenuList/>
                          <hr className='d-sm-none' />
                      </div>
                      {/* <div class="col-12 col-sm-6 col-lg-3">Column</div>
                      <div class="col-12 col-sm-6 col-lg-3">Column</div> */}
                  </div>
              </div>
          </div>
       </div>
       
        
      </div>
  )
}
