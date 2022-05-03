import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../images/user3.png'
import auth from '../../firebase.init';
import GoogleLogin from '../Login/GoogleLogin/GoogleLogin';
import { AiOutlineExclamationCircle } from "react-icons/ai";

const SignUp = () => {
    // const[email1, setEmail1]=useState('');
    // const [emailError, setEmailError] = useState('')
   

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const emailRef = useRef('')
    const passRef = useRef('')
    const namRef =useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass=namRef.current.value;
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
                    <p>Name</p>
                    <input ref={emailRef} type="text" name="" placeholder="Name" required />
                    <p>Email</p>
                    <input ref={emailRef} type="text" name="" placeholder="Enter Email" required />
                  
                    {/* {emailError && <small className='text-red-700 flex items-center '> <AiOutlineExclamationCircle></AiOutlineExclamationCircle> {emailError}</small>} */}
                    <p>Password</p>
                    <input ref={passRef} type="password" name="" placeholder="******" required />
                    {/* {passlError && <small className='text-red-700 flex items-center '> <AiOutlineExclamationCircle></AiOutlineExclamationCircle> {passlError}</small>} */}
                   

                
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