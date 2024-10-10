import React from 'react'

function Header() {
  return (
   <>
    <div className='container-fluid '>
    <div className='row'>
      <div className='col-sm-12'>
         <div className='row' style={{height:'80px'}}> 
         <div className='col-sm-4'>
         <img src="/Logo/jportallogo.png" alt='Public' style={{marginLeft:'30px'}}/>
          </div>
          <div className='col-sm-8'>
          <img src="/Logo/jportall.png" alt='Public'/>
          </div>
         </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Header