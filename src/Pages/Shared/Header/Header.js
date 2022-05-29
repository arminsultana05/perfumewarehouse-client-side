import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <header className='headers'>
      <div className=" ">
        <div className="">
          <div className="nav bg-pink-500">
            <input className='h-5' type="checkbox" id="nav-check" />
            <div className="nav-header ">
              <div className="nav-title ml-3 mt-2">
                Perfume Ware House
              </div>
            </div>
            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links mr-5 mt-2">
              <Link to='/'></Link>
              <Link to='/home'>Home</Link>
              <Link to='/blogs'>Blogs</Link>
             
             
              {
                user && <> <Link to='/manage'>Manage Items</Link>
                  <Link to='/additem'>Add Items</Link>
                  <Link to="/myitems">My Items</Link>
                  <Link to='/about'>About Me</Link>
                  </>
                  
              }
              {user?.uid ?
                <button onClick={handleSignOut} className='text-white'>SignOut</button>
                : <Link to='/login'>Login</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;