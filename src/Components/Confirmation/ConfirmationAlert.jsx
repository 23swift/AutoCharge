import React, { useState } from 'react'

const ConfirmationAlert = (props) => {
    const { hideConfirmation}=props;
const[showProgress,setShowProgress]= useState(false);
    const yesOption = () => { 
        setShowProgress(true);
        setTimeout(()=>{
            setShowProgress(false);
            hideConfirmation();
        },3000)
     }
   const progress=(
        <div className="d-flex align-items-center text-secondary">
                  <strong>Saving, please wait ...</strong>
           <div className="spinner-border ms-auto text-light" role="status" aria-hidden="true"></div>
           
    </div>

   );
  return (
      <div className="border  border-1 border-light alert alert-primary bg-primary p-4 shadow-sm" role="alert" >
          <h4 className="alert-heading text-secondary">Saving!</h4>

         
               <p className='text-light'>Are you sure you want to save the entry?</p>
             
              
              
         
         
          <hr className="text-light"/>
        {!showProgress && <div className="d-grid gap-1   d-flex align-items-center">

                  <button type="button" className="btn text-light btn-primary btn-sm rounded-pill px-4" onClick={hideConfirmation} >No</button>
                  <button type="button" className="btn btn-secondary btn-sm rounded-pill px-5" onClick={yesOption}>Yes</button>
              </div>}
          {showProgress && progress}

         
              {/* <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> */}
      </div>
  )
}

export default ConfirmationAlert