import React from 'react'
import { Outlet } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader';
import Nav from '../../Components/Utilities/Nav';

const UtilitiesMain = () => {

  
    return (
        <div className='container-fluid'>
           {/* <PageHeader title='Utilities'/> */}
                       <div className="row align-items-start ">
                <div className="col-2    rounded-bottom bg-light  d-none d-lg-inline  "  >
                  
                    <Nav/>   
                    
                </div>
                <div className=" col-sm-12 col-lg-10">
                    <div className="ms-3">

                   <Outlet/>
                    </div>
                </div>
            </div>

            {/* <div className="position-relative">
                <div className="position-fixed top-13 start-0 bg-light w-auto pe-2  d-none d-lg-inline"><Nav /></div>
                
                <div className="position-absolute top-0 start-0 d-lg-none  w-100 "><Outlet /></div>
                <div className="position-absolute top-0 start-13   w-100 d-none d-lg-inline"><Outlet /></div>
                
            </div> */}

        </div>
    )
}

export default UtilitiesMain
