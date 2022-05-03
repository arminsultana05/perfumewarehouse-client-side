import React, { useEffect, useRef } from 'react';
import './Login.css'
import logo from '../../images/user2.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin/GoogleLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, updateError] = useSendPasswordResetEmail(
        auth
      );
      const location = useLocation()
      let from= location.state?.from?.pathname || "/   ";
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
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    const resetPassword = async()=>{
        const email =emailRef.current.value;
        await sendPasswordResetEmail(email);
  ;
    if(email){
        alert('Sent email')
        
    }else{
        alert('Enter email address')
    }
     

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
            <button className="btn btn-secondary bg-pink-500 w-full  rounded rounded-full">Log In</button>
            <br />
            <small className='text-white ml-3 text-base cursor-pointer mt-5 '>Forget Password? <span onClick={resetPassword} className='text-yellow-500 '>Reset </span></small> 
        </form>
        <small className='text-white ml-3 text-base cursor-pointer '>New to ware house? <span onClick={signUpNavigate} className='text-yellow-500 '>Sign Up</span></small> 
        <GoogleLogin></GoogleLogin>
    </div>z``
       </div>
 
   
    );
};

export default Login;