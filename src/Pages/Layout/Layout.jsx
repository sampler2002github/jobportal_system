import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 
function Layout() {
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
          <Link className="nav-link" to="/">Login</Link>
        </li> 
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/register">Register</Link>
        </li> 
      </ul>
   </div>
 </div>
</nav>
<Outlet/>
     </>
  )
}

export default Layout