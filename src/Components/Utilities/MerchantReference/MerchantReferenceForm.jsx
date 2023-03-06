import React, { useEffect, useState } from 'react'


import ModalConformation from './../../ModalConfirmation/ModalConformation';
import ToastMessage from './../../ToastMessage/ToastMessage';

const MerchantReferenceForm = (props) => {

    const { hideForm}=props;
    var confirmation={};
    const[openDialog,setOpenDialog]=useState(false);
   
    const[showToast,setShowToast]=useState(false);


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
                setShowToast(true);
           
                resolve(true)
            }, 3000);
        })
     }



   
  return (
<div >
          <ToastMessage message="Record Saved!" type="success" show={showToast} toggleShow={setShowToast}/>
         
          <ModalConformation show={openDialog} setOpenDialog={setOpenDialog} title="Saving" 
              message="Are you sure you want to save the entry ?" yesMethod={SaveMerchant} icon={<i className="bi bi-folder-check text-info"></i>} />
         
          
          <form className='border rounded  p-3 pb-4 mb-3 shadow-sm'>
              <div className="nav justify-content-between mt-2 pe-2  border-bottom ">

                  <p className='fw-bold text-info' >Create New Merchant</p>
                  <button type="button" className='btn  btn-close  border p-2' onClick={hideConfirmation}> </button>
             </div>
              <div className='mt-3' >
                       
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
          <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleFormControlTextarea1" />
          </div>

          <div className="d-grid gap-1   d-flex">
                      <button type="button" className="btn btn-primary px-4 btn-sm border shadow-sm " onClick={() => setOpenDialog(true)}>
                          <i className="bi bi-folder-plus pe-1"></i>  Save</button>
                      {/* <button type="button" className="btn  btn-light btn-sm" onClick={hideConfirmation}>Cancel</button> */}
          </div>
         
    </div> 
          </form>
        
    {/* <hr /> */}
</div>

  )
}

export default MerchantReferenceForm