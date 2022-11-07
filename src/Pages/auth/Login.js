import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {
    const [formvalue, setFormValue] = useState({
        email : "",
        password : "",
        name : "",
        gender : "",
    })

    const formInputHandler = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setFormValue({...formvalue, [name] : value})        
    }
    // console.log(formvalue.email, formvalue.password)
    const formSubmitHandler = (event) =>{
        event.preventDefault()

        console.log("email :", formvalue.email,formvalue.password)
    }
    return (
        <div className='login-form'>
            <form onSubmit={formSubmitHandler} >
                <h1 className='text-center'> Login </h1>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        className="form-control"
                        name= "email"
                        value={formvalue.email}
                        placeholder="email"
                        onChange={formInputHandler}
                        // onChange={(e)=> formInputHandler(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                    <input 
                        type="password" 
                        className="form-control" 
                        value={formvalue.password}
                        placeholder="password"
                        name='password'
                        onChange={formInputHandler}
                    />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={formvalue.name}
                        placeholder="name"
                        name='name'
                        onChange={formInputHandler}
                        required
                    />
                    <label className="form-label" htmlFor="form2Example2">name</label>
                </div>
                <div className="form-outline mb-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={formvalue.gender}
                        placeholder="gender"
                        name='gender'
                        onChange={formInputHandler}
                        required
                    />
                    <label className="form-label" htmlFor="form2Example2">gender</label>
                </div>
                {/* 2 column grid layout for inline styling */}
                {/* <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>
                </div> */}
                {/* Submit button */}
                <button type="submit"  className="btn btn-primary btn-block mb-4">Sign in</button>
                {/* Register buttons */}
                <div className="text-center">
                    <p>Not a member? <Link to={"signUp"} >Register</Link></p>
                </div>
            </form>
        </div>



    )
}
export default Login

