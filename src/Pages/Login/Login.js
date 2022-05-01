import React from 'react';
import './Login.css'
import logo from '../../images/user2.png'

const Login = () => {
    return (
  
       <div className="form-container ">
            <div className="loginBox">
        <img src={logo} class="user"/>
        <h2>Login</h2>
        <form>
            <p>Email</p>
            <input type="text" name="" placeholder="Enter Email"/>
            <p>Password</p>
            <input type="password" name="" placeholder="******"/>
           
            <input type="submit" name="" value="Sign In"/>
           
            <a href="#">Forget Password?</a>
        </form>
    </div>
       </div>
 
   
    );
};

export default Login;