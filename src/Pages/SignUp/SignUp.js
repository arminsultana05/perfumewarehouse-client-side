import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../images/user3.png'
import auth from '../../firebase.init';
import GoogleLogin from '../Login/GoogleLogin/GoogleLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const emailRef = useRef('')
    const passRef = useRef('')
    const confirmPassRef =useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass=confirmPassRef.current.value;
        createUserWithEmailAndPassword(email,pass,confirmPass)
       

    }
    const logInNavigate = event => {
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className="form-container ">
            <div className="loginBox">
                <img src={logo} class="user" />
                <h2 className='login-color'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input ref={emailRef} type="text" name="" placeholder="Enter Email" required />
                    <p>Password</p>
                    <input ref={passRef} type="password" name="" placeholder="******" required />
                    <p>Confirm Password</p>
                    <input ref={passRef} type="password" name="" placeholder="******" required />
                    <button className="btn btn-secondary bg-pink-500 w-full  rounded rounded-full">sign Up</button>
                    <br />
                    <small className='text-white  text-base cursor-pointer mt-5 '>Already have an account? <span onClick={logInNavigate} className='text-yellow-500 '>Login</span></small>
                    <GoogleLogin></GoogleLogin>
                </form>

            </div>
        </div>


    );
};

export default SignUp;