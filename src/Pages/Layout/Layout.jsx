import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LoginPopUp from './LoginPopUp'
import RegisterPopUp from './RegisterPopUp'
 
const Layout=()=> {
  
  return (
     <> 
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid"> 
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav"> 
       <li className="nav-item mx-2">
         <Link className="nav-link" aria-current="page" to="#">Home</Link>
       </li>
       <li className="nav-item mx-2">
         <Link className="nav-link" to="/jobseekerlayout">Job Seeker</Link>
       </li> 
       <li className="nav-item mx-2">
         <Link className="nav-link" to="/newcompanylayout">New Company</Link>
       </li>
       <li className="nav-item mx-2">
         <Link className="nav-link" to="/feedback">FeedBack</Link>
       </li>
       <li className="nav-item mx-2">
          <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li> 
     </ul>
     <ul className='navbar-nav ms-auto'>
      <li className="nav-item mx-2">
          <Link className="nav-link" to="/login" data-bs-toggle="modal" data-bs-target="#exampleModallogin" data-bs-whatever="@mdo" >Login</Link> 
        </li> 
        {/* <li className="nav-item mx-2" > 
          <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModallogin" data-bs-whatever="@mdo">Login2</Link>
        </li> */}
        <li className="nav-item mx-2"> 
          <Link className="nav-link" to="/register" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</Link>
        </li>  
        {/* <li className="nav-item mx-2" > 
          <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Register2</Link>
        </li> */}
      </ul>
   </div>
 </div>
</nav> 
<LoginPopUp/>
<RegisterPopUp/>
<Outlet/>
     </>
  )
}

export default Layout