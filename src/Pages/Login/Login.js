import React, { useEffect, useRef, useState } from 'react';
import './Login.css'
import logo from '../../images/user2.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await signInWithEmailAndPassword(email, pass);
        const { data } = await axios.post('https://fierce-fortress-12613.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }
    const signUpNavigate = event => {
        navigate('/signup')
    }
    if (error) {
        alert('Please Enter Valid Email and Password')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')

        } else {
            toast('Enter email address')
        }
        if (loading || sending) {
            return <Loading></Loading>
        }
    }
    return (

        <div className="form-container ">
            <div className="loginBox">
                <img src={logo} class="user" />
                <h2 className='login-color'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input ref={emailRef} type="text" name="" placeholder="Enter Email" required />
                    <p>Password</p>
                    <input ref={passRef} type="password" name="" placeholder="******" required />
                    <button className="btn btn-secondary bg-pink-500 w-full  rounded rounded-full">Log In</button>
                    <br />
                    <small className='text-white ml-3 text-base cursor-pointer mt-5 '>Forget Password? <span onClick={resetPassword} className='text-yellow-500 '>Reset </span></small>
                </form>
                <small className='text-white ml-3 text-base cursor-pointer '>New to ware house? <span onClick={signUpNavigate} className='text-yellow-500 '>Sign Up</span></small>
                <GoogleLogin></GoogleLogin>
                <ToastContainer />
            </div>
        </div>


    );
};

export default Login;