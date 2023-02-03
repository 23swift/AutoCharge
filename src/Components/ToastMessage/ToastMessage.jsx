import React, { useEffect } from 'react'
import { Toast } from 'bootstrap/dist/js/bootstrap.esm';
// import 'bootstrap/js/dist/toast';


const ToastMessage = (props) => {
    const{message,type}=props;

    const toastClassName = type == "success" ? "text-bg-success" :"text-bg-danger"
  return (
      
      <div className="toast-container position-fixed top-0 end-0 p-3">

          <div id="toastMsg" className={"toast align-items-center border-0 top-0 end-0 " + toastClassName} role="alert" aria-live="assertive" aria-atomic="true" >
          <div className="d-flex">
              <div className="toast-body">
                      <i className="bi bi-check-circle-fill "></i>
                      {" " +message}
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
      </div>
      </div>
  )
}

export default ToastMessage