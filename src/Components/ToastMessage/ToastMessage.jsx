import React, { useEffect } from 'react'

import Toast from 'react-bootstrap/Toast';
// import 'bootstrap/js/dist/toast';


const ToastMessage = (props) => {
    const { message, type, show, toggleShow
}=props;

    const toastClassName = type == "success" ? "text-bg-success" :"text-bg-danger"
  return (
       
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
{/* <Toast show={show} onClose={toggleShow}>
          <div id="toastMsg" className={"toast align-items-center border-0 top-0 end-0 " + toastClassName} role="alert" aria-live="assertive" aria-atomic="true" >
          <div className="d-flex">
              <div className="toast-body">
                      <i className="bi bi-check-circle-fill "></i>
                      {" " +message}
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
      </div>
       </Toast> */}

          <Toast show={show} onClose={() => toggleShow(false)} autohide className={"toast align-items-center border-0 top-0 end-0 shadow-sm " + toastClassName} >
              {/* <Toast.Header>
                  <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
              <div className="d-flex">
                  <div className="toast-body">
                      <i className="bi bi-check-circle-fill "></i>
                      {" " + message}
                  </div>
                  <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
          </Toast>
      </div>
       
     
  )
}

export default ToastMessage