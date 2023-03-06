// import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'
// import { Modal } from 'bootstrap/dist/js/bootstrap.esm';
import { Modal } from 'react-bootstrap';





const spinner=
    <div className="d-flex align-items-left text-info p-3">
        <strong >Please wait ...</strong>
        <div className="spinner-border ms-auto text-secondary" role="status" aria-hidden="true"></div>
</div>;
    


const ActionButtons=(props)=>{
    const{closeAction,yesAction}=props;
    return(
        <Modal.Footer>
            <button type="button" className="btn btn-light  text-primary btn-sm rounded-pill border px-4" onClick={closeAction}>No</button>
            <button type="button" className="btn btn-info btn-sm rounded-pill px-5  border shadow-sm" onClick={yesAction} >Yes</button>
        </Modal.Footer>

        )
}

const ModalConformation = (props) => {
    const { show, setOpenDialog, title, message, closeMethod, yesMethod,icon, isDeleting}=props;
   const[isProcessing,setIsProcessing]=  useState(false);
    let myModalAlternative = null;
    const options = {
        'backdrop':'static'
    }
    const closeDialog = () => { 
        if (closeMethod) closeMethod();
        // myModalAlternative.hide();
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

  return (
   <div>
         

          <Modal show={show} onHide={closeAction} centered>
              <Modal.Header closeButton>
                  <Modal.Title className={isDeleting ?'text-danger' :'text-primary'}>{ icon} {title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className='text-info'>
                  {isProcessing ? spinner : message}
                  
                 </Modal.Body>
              {!isProcessing && <ActionButtons closeAction={closeAction} yesAction={yesAction} />}
          </Modal>
      </div>
  )
}

export default ModalConformation