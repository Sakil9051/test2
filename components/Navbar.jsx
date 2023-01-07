import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Authcontext';
import "./Navbar.css"
const Navbar = () => {
  const { isAuth,userdata} = useContext(AuthContext);
  return (
    <div>
      <nav>
        <div>
          {isAuth ?<div>Logout</div>:
      <Link to={"/login"}>  <div >Login</div></Link>
      }</div>
        <Link to={"/"}><div>Signup</div></Link>
        <Link to={"/task"}><div>Add Task</div></Link>
      </nav>
    </div>
  )
}

export default Navbar
