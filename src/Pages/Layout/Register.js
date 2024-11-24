import axios from 'axios';
import React, { useEffect, useState } from 'react' 

const Register=()=>{
  const [id, setId]=useState(""); 
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [mobile, setMobile]=useState("");
  const [btnChange, setBtnChnage]=useState("Submit");
  const [formErrors, setFormErrors] = useState({});
    

  useEffect (()=>{
    fetchRegister()
  },[]);
 
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (name.length < 5) {
      errors.name = 'Name must be at least 5 characters';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = 'Enter a valid email';
      isValid = false;
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Mobile validation
    if (!mobile) {
      errors.mobile = 'Mobile is required';
      isValid = false;
    } else if (mobile.length < 10) {
      errors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const fetchRegister=async()=>{
    try {
      const response=await axios
      .get("https://localhost:7070/api/User/GetAllUsers") 
      console.log(response.data);

    } catch (error) {
      console.error("Error Fetchingdata!!",error);
    }
  }

  const addRegister=(e)=>{
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if(btnChange==="Submit"){
      axios
      .post("https://localhost:7070/api/User/AddUser",{name,email,password,mobile})
      .then((result)=>{
        console.log(result);
        alert("Register Successfully!!");
        fetchRegister();
        setName();
        setEmail();
        setPassword();
        setMobile();
      })
      .catch((error)=>{
        console.error("Error Register!",error);
        });
        setId('');
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
    }
    else{
      axios
      .put("https://localhost:7070/api/Registers/UpdateRegister",{id,name,email,password,mobile})
      .then((result)=>{
        console.log(result);
        alert("Update Register Successfully!!");
        fetchRegister();
        setId();
        setName();
        setEmail();
        setPassword();
        setMobile();
        setBtnChnage("Submit");
      })
      .catch((error)=>{
        console.error("Error Updating Register!!",error);
    })
    }
  };

  return (
   <>
   <div className='container border vh-auto bg-light mt-3'>
     <div className='row align-item-center justify-content-center'>
       <div className='text-center mb-2'>
         <h4>Register Form</h4>
       </div> 
       <hr/>
      <form onSubmit={addRegister}>
         <div className='form-group mb-2'>
         <label htmlFor='name' className='form-label'>Name:</label>  
         <input type='text' className='form-control' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} autoComplete='of'/> 
         {formErrors.name && <div className='text-danger'>{formErrors.name}</div>}
         </div>
         <div className='form-group mb-2'>
            <label htmlFor='email' className='form-label'>Email:</label>   
            <input type='email' className='form-control' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='of'/> 
            {formErrors.email && <div className='text-danger'>{formErrors.email}</div>}
         </div>  
         <div className='form-group mb-2'>
           <label htmlFor='password' className='form-label'>Password:</label>   
           <input type='password' className='form-control' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='of'/> 
           {formErrors.password && <div className='text-danger'>{formErrors.password}</div>}

         </div>  
         <div className='form-group mb-2'>
            <label htmlFor='mobile' className='form-label'>Mobile:</label>   
            <input type='text' className='form-control' placeholder='Enter your mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} autoComplete='of' maxLength={10} /> 
            {formErrors.mobile && <div className='text-danger'>{formErrors.mobile}</div>}
         </div>  
         <div className='mt-3 text-center mb-2'>
           <button type="submit" className="btn btn-success btn-sm">{btnChange==="Submit"}Submit</button>  
         </div>  
         {/* <div className='mt-1 text-center'><Link to='/login' data-bs-dismiss="modal">Login</Link></div>  */}
       </form> 
     </div>
   </div>
   </>
  )
}

export default Register