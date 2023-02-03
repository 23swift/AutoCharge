import React, { useEffect, useState } from 'react'
import { Modal } from 'bootstrap/dist/js/bootstrap.esm';
import ToastMessage from './../ToastMessage/ToastMessage';




const spinner=


       
    <div className="d-flex align-items-left text-light px-1 pt-1">
        <strong>Please wait ...</strong>
        <div className="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>

</div>;
    


const ActionButtons=(props)=>{
    const{closeAction,yesAction}=props;
    return(
        <div className="modal-footer pt-4">
            <button type="button" className="btn btn-primary  text-light btn-sm rounded-pill px-4" onClick={closeAction}>Close</button>
            <button type="button" className="btn btn-secondary btn-sm rounded-pill px-5" onClick={yesAction} >Yes</button>
        </div>

        )
}

const ModalConformation = (props) => {
    const { openDialog, setOpenDialog, title, message, closeMethod, yesMethod}=props;
   const[isProcessing,setIsProcessing]=  useState(false);
    let myModalAlternative = null;
    const options = {
        'backdrop':'static'
    }
    const closeDialog = () => { 
        if (closeMethod) closeMethod();
        myModalAlternative.hide();
        setOpenDialog(false);
        
    }
    const yesAction = () => { 
        //saving action here
        setIsProcessing(true);
        yesMethod().then(bool =>{
            console.log(bool);
            setIsProcessing(false);
            closeDialog();
        }).catch(err => console.log('There was an error:' + err));
        
        
       
       
     }

     const closeAction = () => { 
         console.log('close action');
         closeDialog();
      }
useEffect(()=>{
    if (!myModalAlternative) { myModalAlternative = new Modal('#exampleModal', options);}
   

    if (openDialog==true) {myModalAlternative.show();}else{
        myModalAlternative.hide();
    }


}, [openDialog]);
  return (
   <div>
         
      <div className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-primary p-2">
                  <div className="modal-header ">
                      <h1 className="modal-title fs-5 text-secondary" id="staticBackdropLabel">{title}</h1>
                      {!isProcessing && <button type="button" className="btn btn-close" onClick={closeAction}>
                          
                      </button>}
                  </div>
                  <div className="modal-body text-light">
                      {isProcessing ? spinner : message
                         }
                      
                  </div>
                  
                  <div >
                      {!isProcessing && <ActionButtons closeAction={closeAction} yesAction={yesAction}/> }
                     
                  </div>
              </div>
          </div>
                         </div>
      </div>
  )
}

export default ModalConformation