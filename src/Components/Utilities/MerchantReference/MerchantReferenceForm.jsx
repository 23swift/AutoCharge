import React, { useEffect, useState } from 'react'
import ConfirmationAlert from './../../Confirmation/ConfirmationAlert';
import { Collapse,Toast } from 'bootstrap/dist/js/bootstrap.esm';
import ModalConformation from './../../ModalConfirmation/ModalConformation';
import ToastMessage from './../../ToastMessage/ToastMessage';
const MerchantReferenceForm = (props) => {

    const { hideForm}=props;
    var confirmation={};
    const[openDialog,setOpenDialog]=useState(false);
const[showToast,setShowToast]=useState(false);
   const toastEl = new Toast("#toastMsg");

    const showConfirmation = () => {
        confirmation.show();

    }
    const hideConfirmation = () => {
        // confirmation.hide();
        hideForm();

    }
    
    const SaveMerchant = () => { 

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                // var didSucceed = Math.random() >= 0.5;
                
                // didSucceed ? resolve(true) : reject(false);
                // setShowToast(true);
                toastEl.show();
                resolve(true)
            }, 3000);
        })
     }


  
   
  return (
<div >
          <ToastMessage  message="Record Saved!"  type="success"/>
         
          <ModalConformation openDialog={openDialog} setOpenDialog={setOpenDialog} title="Saving" 
              message="Are you sure you want to save the entry?" yesMethod={SaveMerchant} />
          <form className=''>
             
              <div className='mt-3 '>
        <p className='fw-bold'>Create New Merchant</p>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
          <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleFormControlTextarea1" />
          </div>

          <div className="d-grid gap-1   d-flex">
                      <button type="button" className="btn btn-primary btn-sm" onClick={() => setOpenDialog(true)}>Save</button>
                      <button type="button" className="btn  btn-light btn-sm" onClick={hideConfirmation}>Cancel</button>
          </div>
         
    </div> 
          </form>
        
    <hr />
</div>

  )
}

export default MerchantReferenceForm