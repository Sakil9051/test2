import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css";
const init={
  "email":"",
"username":"",
"password":"",
"confirmPassword":"",
}
const Signup = () => {
  const[data,setdata]=useState(init);


const handalechange=(e)=>{
  const {name,value}=e.target;
  setdata({...data,[name]:value})
}



const handalesubmit=async(e)=>{
  e.preventDefault();
  if(data.password===data.confirmPassword){
    fetch("https://lazy-fly-polo-shirt.cyclic.app/users",{
     method: "POST",
     body: JSON.stringify(data),
     headers: {"Content-Type": "application/json"}
    }).then(()=>{
     alert("Signup Success")
    })

   }else{
     alert("Please enter same password in both field")
   }
}

  return (
    <div className='Signup-contenar'>
      <h2>Welcome !</h2>
      <h1>Sign up to</h1>
      <p>Lorem Ipsum is simply</p>
      <form onSubmit={handalesubmit}>
        <label>Email</label>
        <input onChange={handalechange} type="email" value={data.email} name='email' placeholder='Enter your email'></input>
        <label>User name</label>
        <input onChange={handalechange} type="text" value={data.username} name='username' placeholder='Enter your user name'></input>
        <label>Password</label>
        <input onChange={handalechange} value={data.password} name='password' type={"password"} placeholder='Enter your Password'></input>
        <label>Confrim Password</label>
        <input onChange={handalechange} value={data.confirmPassword} name='confirmPassword' type={"password"} placeholder='Confrim your Password'></input>
        <input  type={"submit"} value="Register" className='btn'/>
      </form>
      <p>Already have an Account?</p><samp className='register-btn'><Link to={"/login"}>Login</Link></samp>
    </div>
  )
}

export default Signup
