import React from 'react'
import Register from './Register'

function RegisterPopUp() {
  return (
    <>
    <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content bg-light">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Register Form</h1> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <Register/>
      </div>
      {/* <div className="modal-footer">
      <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button> 
        <button type="submit" className="btn btn-success btn-sm">Submit</button>  
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}

export default RegisterPopUp