import React from 'react'
import Login from './Login'

function LoginPopUp() {
  return (
    <>    
<div className='container'>
<div className="modal fade" id="exampleModallogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabellogin" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered p-4">
    <div className="modal-content"> 
      {/* <h1 className="modal-title fs-5 mt-4" id="exampleModalLabellogin" style={{textAlign:"center"}}>Login Form</h1>
      */}
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabellogin">Login Form</h1> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      
     </div>
      <div className="modal-body">
      <Login/>
      </div>  
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default LoginPopUp