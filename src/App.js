
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout/Layout'; 
import Home from './Pages/Layout/Home';
import Company from './Pages/Layout/Company';
import ContactUs from './Pages/Layout/ContactUs'; 
import FeedBack from './Pages/Layout/FeedBack';
import JobSeeker from './Pages/Layout/JobSeeker';
import Register from './Pages/Layout/Register';
import Login from './Pages/Layout/Login';
import Header from './Pages/Layout/Header';
import MyAccount from './Pages/JobSeekerLayoyt/MyAccount';
import JobSeekerLayout from './Pages/JobSeekerLayoyt/JobSeekerLayout';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container-fluid border'>
      <div className='row'> 
        <Header/>
      </div>
    </div>
    <div className='col-12 d-flex-col'>      
    
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='company' element={<Company/>}/>
      <Route path='contactus' element={<ContactUs/>}/> 
      <Route path='feedback' element={<FeedBack/>}/>
      <Route path='jobseeker' element={<JobSeeker/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>

       <Route path='/jobseekerlayout' element={<JobSeekerLayout/>}>
       <Route path='jobseekeraccount' element={<MyAccount/>}/>
       </Route>
      
       
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
