 import React from 'react'  
import Login from './Login'

 const Home=()=> { 
   return (
     <>
     <div className='container-fluid mt-3'>
       <div className='row'>
        <div className='col-8 d-flex-col'> 
            <img src="/Logo/online-job-portal.jpg" alt='Public' height={320} width={700}/>   
        </div> 
        <Login/>
       </div>
     </div>
     </>
   )
 }
 
 export default Home