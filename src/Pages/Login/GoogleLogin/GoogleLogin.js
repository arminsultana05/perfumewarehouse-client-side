import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/google.png'

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    if(user){
        navigate('/home')

    }
    return (
        <div>
            <div className='flex items-center'>
                <div style={{ height: '2px' }} className='bg-pink-500 w-2/4 mr-2'></div>
                <p>or</p>
                <div style={{ height: '2px' }} className='bg-pink-500 w-2/4 ml-2'></div>
            </div>

            <button onClick={()=>signInWithGoogle()} className="btn btn-outline btn-secondary w-full inline   rounded rounded-full  ">  <img className='w-7 h-7  inline  ' src={logo} alt="" />         <span className='ml-3'>Google Sign In</span></button>
        </div>
    );
};

export default GoogleLogin;