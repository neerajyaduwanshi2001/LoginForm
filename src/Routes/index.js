import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from '../Pages/auth/Login';
import SignUp from '../Pages/auth/SignUp';

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <h1>Welcome to React Router!</h1> */}
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="signUp" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
