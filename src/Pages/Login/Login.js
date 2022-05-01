import React, { useRef } from 'react';
import './Login.css'
import logo from '../../images/user2.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation()
      let from= location.state?.from?.pathname || "/";
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit= event =>{
        event.preventDefault();
        const email =emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email,pass);

    }
    const signUpNavigate= event =>{
        navigate('/signup')
    }
    if(user){
        navigate(from, {replace: true});
    }
    return (
  
       <div className="form-container ">
            <div className="loginBox">
        <img src={logo} class="user"/>
        <h2 className='login-color'>Login</h2>
        <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input ref={emailRef} type="text" name="" placeholder="Enter Email" required/>
            <p>Password</p>
            <input ref={passRef} type="password" name="" placeholder="******" required/>
            <button className="btn btn-secondary bg-pink-500 px-28 rounded rounded-full">Login</button>
            <br />
           {/* <input type="submit" name="" value="Sign In"/> */}
            <a className='ml-3 mt-2' href="#">Forget Password?</a>
        </form>
        <small className='text-white ml-3 text-base cursor-pointer '>New to ware house? <span onClick={signUpNavigate} className='text-yellow-500 '>Sign Up</span></small> 
    </div>
       </div>
 
   
    );
};

export default Login;