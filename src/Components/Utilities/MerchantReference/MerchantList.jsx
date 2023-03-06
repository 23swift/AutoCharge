import React, { useEffect, useState } from 'react'
import PageHeader from './../../../Components/PageHeader';

// import {Collapse} from 'bootstrap/dist/js/bootstrap.esm';
import Collapse from 'react-bootstrap/Collapse';
import ConfirmationAlert from './../../Confirmation/ConfirmationAlert';
// import ModalConformation from './../../ModalConfirmation/ModalConformation';
import ToastMessage from './../../ToastMessage/ToastMessage';
import MerchantReferenceForm from './MerchantReferenceForm';
import ModalConformation from '../../ModalConfirmation/ModalConformation';

function MerchantList() {
   
    const[deleteList,setDeleteList]=useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const[openCollapse,setOpenCollapse]= new useState(false);
    const showForm=()=>{
        setOpenCollapse(true);
        
    }
    const hideForm=()=>{
        setOpenCollapse(false);

    }
    
    const DeleteMerchant = () => { 
        
        return new Promise((resolve, reject) => {
            setTimeout(function () {
              
                console.error('Delete merchant not implemented');
                resolve(true);
            }, 3000);
        })
     }

   
    return (
        <div>
            <ModalConformation show={openDeleteDialog} setOpenDialog={setOpenDeleteDialog} title="Deleting" isDeleting={true}
                message="Are you sure you want to delete the record/s ?" yesMethod={DeleteMerchant} icon={<i className="bi bi-trash3-fill"></i>} />
            
            <Collapse in={openCollapse}>
                <div id="example-collapse-text">

                <MerchantReferenceForm hideForm={hideForm} />
                </div>
            </Collapse>
            <nav className="navbar navbar-expand navbar-light bg-white ">
                <div className="container-fluid p-0 py-2">

                    <div className=" navbar p-0 mt-1 ">
                        <div className="navbar-nav text-primary gap-1">

                            <button className="btn btn-primary btn-sm px-4 border shadow-sm" onClick={showForm}
                            
                            
                                aria-controls="example-collapse-text"
                               type="button"><i className="bi bi-plus pe-1 "></i>  New</button>
                            {/* <a className="nav-link text-primary m-0 p-0" onClick={showForm}  ><i className="bi bi-plus p-0"></i>New</a> */}
                            {/* <a className="nav-link text-primary m-0 p-0 mx-1 disabled"  ><i className="bi bi-x"></i>Delete</a> */}
                            <button className="btn btn-light btn-sm text-info " onClick={() => setOpenDeleteDialog(true)} type="button"><i className="bi bi-x"></i>  Delete</button>
                        </div>
                        
                       
                    </div>
                </div><div className='float-end w-100'>
                        <form className="d-flex " role="search">
                        <input className="form-control form-control-sm me-2" type="search" placeholder="Merchant Name" aria-label="Search"/>
                        <button className="btn btn-info fw-bold btn-sm " type="submit"><i className="bi bi-search"></i></button>
                        </form>
                        </div >
            </nav>

            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm justify-content-start">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="form-check ">
                                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />

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
                                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />

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