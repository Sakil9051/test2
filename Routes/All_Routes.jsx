import React from 'react'
import { Route, Routes } from "react-router-dom";
import Add_task from '../pages/Add_task'
import Login from '../pages/login';
import Signup from '../pages/Signup'
import PrivateRoute from '../components/PrivateRoute';
const All_Routes = () => {
  return (
      <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/task" element={
            <PrivateRoute>
            <Add_task/>
            </PrivateRoute>
            }></Route>
        </Routes>
    
  )
}

export default All_Routes;
