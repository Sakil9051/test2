import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Authcontext';
import "./Login.css";
const init={
  "email":"",
"username":"",
"password":"",
"confirmPassword":"",
}
const Login = () => {
  const[data,setdata]=useState(init);
  const { setIsAuth,setuserdata} = useContext(AuthContext);

  const navegate =useNavigate();
const handalechange=(e)=>{
  const {name,value}=e.target;
  setdata({...data,[name]:value})
}



const handalesubmit=async(e)=>{
  
  e.preventDefault();
  fetch(`https://lazy-fly-polo-shirt.cyclic.app/users?username=${data.username}&password=${data.password}`).then((res)=>res.json()).then((data)=>{
    if(data){
      setIsAuth(true);
      setuserdata(data);
      navegate("/task")
    }
   })
}

  return (
    <div className='Signup-contenar'>
      <h2>Welcome !</h2>
      <h1>Sign up to</h1>
      <p>Lorem Ipsum is simply</p>
      <form onSubmit={handalesubmit}>
        <label>User name</label>
        <input onChange={handalechange} type="text" value={data.username} name='username' placeholder='Enter your user name'></input>
        <label>Password</label>
        <input onChange={handalechange} value={data.password} name='password' type={"password"} placeholder='Enter your Password'></input>
        <input  type={"submit"} value="Login" className='btn'/>
      </form>
      <p>Don't have an Account?</p><samp className='register-btn'><Link to={"/"}>Register</Link></samp>
    </div>
  )
}

export default Login;
