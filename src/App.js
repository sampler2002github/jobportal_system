
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
import AdminLayout from './Pages/AdminLayout/AdminLayout';
import NewCompanyLayout from './Pages/CompanyLayout/NewCompanyLayout';
import NCMyAccount from './Pages/CompanyLayout/NCMyAccount';
import PostNewJob from './Pages/CompanyLayout/PostNewJob';
import NCMyPostedJob from './Pages/CompanyLayout/NCMyPostedJob';
import NCProfileMatche from './Pages/CompanyLayout/NCProfileMatche';
import NCAppliedJob from './Pages/CompanyLayout/NCAppliedJob';
import NCChangePassword from './Pages/CompanyLayout/NCChangePassword';
import NCMymessage from './Pages/CompanyLayout/NCMymessage';
import NCMyInbox from './Pages/CompanyLayout/NCMyInbox';
import JobMatches from './Pages/JobSeekerLayoyt/JobMatches';
import ProfileMatches from './Pages/JobSeekerLayoyt/ProfileMatches';
import JSChangePassword from './Pages/JobSeekerLayoyt/JSChangePassword';
import AppliedJob from './Pages/JobSeekerLayoyt/AppliedJob';
import JSMyMessage from './Pages/JobSeekerLayoyt/JSMyMessage';
import JsMyInbox from './Pages/JobSeekerLayoyt/JsMyInbox';
import JSMySent from './Pages/JobSeekerLayoyt/JSMySent';  
import Admin from './Pages/Layout/Admin';

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
       <Route path='jobmatches' element={<JobMatches/>}/>
       <Route path='profilematches' element={<ProfileMatches/>}/>
       <Route path='appliedjob' element={<AppliedJob/>}/>
       <Route path='jschnagepassword' element={<JSChangePassword/>}/>
       <Route path='jsmymessage' element={<JSMyMessage/>}/>
       <Route path='jsmyinbox' element={<JsMyInbox/>}/>
       <Route path='jsmysent' element={<JSMySent/>}/> 
       </Route>
       

        
       <Route path='/adminlayout' element={<AdminLayout/>}>    
       <Route path='admin' element={<Admin/>} />
       </Route>

       <Route path='/newcompanylayout' element={<NewCompanyLayout/>}>
       <Route path='ncmyaccount' element={<NCMyAccount/>} />
       <Route path='ncpostnewjob' element={<PostNewJob/>}/>
       <Route path='postedjob' element={<NCMyPostedJob/>}/>
       <Route path='ncprofilematche' element={<NCProfileMatche/>} />
       <Route path='ncappliedjob' element={<NCAppliedJob/>} /> 
       <Route path='ncchangepassword' element={<NCChangePassword/>} />
       <Route path='ncmymessage' element={<NCMymessage/>} />
       <Route path='ncmyinbox' element={<NCMyInbox/>} />

       </Route>
         
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
