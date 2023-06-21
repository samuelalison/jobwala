import React from 'react'
import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Logo.png';
import {BiLogIn} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Menu = () => (
  <>
  <a href="find-jobs">Find Jobs</a>
  <a href="people">People</a>
  <a href="education">Education</a>
  <a href="blog">Blog</a>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div>
    <div className='navbar__container'>
      <div className='navbar__logo'>
      <img className='navbar__logo__img'  src={logo} alt=''/>
      <h4 className='navbar__logo__img-h4'>Jobfinder</h4>
      </div>

      <div className='navbar-links_container'>
       <Menu />
      </div>

      <div className='navbar-sign'>
        <div className='navbar-sign__sign-in__btns'>
        <button className='btn navbar-sign__sign-in_btn'>
        <BiLogIn />
         <p className='navbar-sign__sign-in_btn__p'>Sign In</p>
        </button>
       
        <div>
      <button className='btn navbar-sign__sign-up_btn'>
        <HiUsers />
        <p>Sign up</p>
      </button>
      </div>
      </div>
    </div>

    <div className='navbar__menu'>
    {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {
            toggleMenu && (
           <div className='navbar__menu_container scale-up-center'>
              <Menu />
       <div className='navbar__menu-sign'>
       
        <button className='btn navbar-sign__sign-in_btn'>
        <BiLogIn />
         <p className='navbar-sign__sign-in_btn__p'>Sign In</p>
        </button>
       
        <div>
      <button className='btn navbar-sign__sign-up_btn'>
        <HiUsers />
        <p>Sign up</p>
      </button>
      </div>
      </div>
    </div>
              
            )
          }
    </div>
    </div>
    </div>
  )
}

export default Navbar