import React, { useEffect, useState } from 'react'
import PageHeader from './../../../Components/PageHeader';
import MerchantReferenceForm from './../../../Components/Utilities/MerchantReference/MerchantReferenceForm';
import {Collapse} from 'bootstrap/dist/js/bootstrap.esm';
import ConfirmationAlert from './../../Confirmation/ConfirmationAlert';
import ModalConformation from './../../ModalConfirmation/ModalConformation';
import ToastMessage from './../../ToastMessage/ToastMessage';
function MerchantList() {
    var bsCollapse ={};
    const[deleteList,setDeleteList]=useState([]);

    const showForm=()=>{
        bsCollapse.show();
        
    }
    const hideForm=()=>{
        bsCollapse.hide();

    }
    useEffect(()=>{
       

         bsCollapse = new Collapse(merchantForm, {
            toggle: false
        }) 
    },[]);
    return (
        <div>
           
            <div className="collapse" id="merchantForm">

                <MerchantReferenceForm hideForm={hideForm} />
            </div>
           
            <nav className="navbar navbar-expand navbar-light bg-white p-0 ">
                <div className="container-fluid p-0 py-2">

                    <div className=" navbar p-0 mt-2">
                        <div className="navbar-nav text-primary gap-1 ps-1">

                            <button className="btn btn-primary btn-sm px-4" onClick={showForm} type="button"><i className="bi bi-plus p-0"></i>  New</button>
                            {/* <a className="nav-link text-primary m-0 p-0" onClick={showForm}  ><i className="bi bi-plus p-0"></i>New</a> */}
                            {/* <a className="nav-link text-primary m-0 p-0 mx-1 disabled"  ><i className="bi bi-x"></i>Delete</a> */}
                            <button className="btn btn-light btn-sm text-primary" onClick={()=>setOpen(true)} type="button"><i className="bi bi-x"></i>  Delete</button>
                        </div>
                    </div>
                </div>
            </nav>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                            </div>
                        </th>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                            </div></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><i className="bi bi-pencil-fill text-primary"></i></td>
                    </tr>
                    <tr>
                        <th scope="row"><div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                        </div></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><i className="bi bi-pencil-fill text-primary"></i></td>
                    </tr>
                    <tr>
                        <th scope="row"><div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                        </div></th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td><i className="bi bi-pencil-fill text-primary"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MerchantList