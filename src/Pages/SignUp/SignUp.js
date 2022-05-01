import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../images/user3.png'
import auth from '../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passRef = useRef('')
    const confirmPassRef =useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass=confirmPassRef.current.value;
        console.log(email, pass);

    }
    const logInNavigate = event => {
        navigate('/login')
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
                    <button className="btn btn-secondary bg-pink-500 px-28 rounded rounded-full">Login</button>
                    <br />
                    <small className='text-white ml-2 text-base cursor-pointer '>Already have an account? <span onClick={logInNavigate} className='text-yellow-500 '>Login</span></small>
                </form>

            </div>
        </div>


    );
};

export default SignUp;