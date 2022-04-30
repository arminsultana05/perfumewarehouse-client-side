import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className=''>
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
            <Link to='/manage'>Manage Items</Link>
            <Link to='/myitems'>My Items</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/login'>Login</Link>
            {/* <Link to ='/login'>Login</Link> */}
           
            

          </div>
        </div>
      </div>
    </div>
  

        </header>
    );
};

export default Header;