import React from 'react'
import './header.css';
import {BiCalendar} from 'react-icons/bi';
import {GrLocation} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';
import Arrow from '../../assets/Arrow-down.png'

const Header = () => {
  return (
    <div>
    <div className='hero'>
    <div className='hero-container'>
      <div className='hero__text'>
      <h1>Find jobs in New Castle</h1>
      <p>A few things you can do to get the most out of your search</p>
       </div>
        
        <div className='hero-box'>
          <div className='hero-box__container'>
         <div className='hero-box__search'>
          <div className='hero-box__search__sign'>
            <BiCalendar />
            <p>Search job</p>
             </div>
            <input type="text" placeholder='Search Keyword' />
             </div>
          <div className='hero-box__location'>
         <div className='hero-box__location__sign'>
            <GrLocation />
            <p>Location</p>
          </div>
             <input type="text" placeholder='Search Location' />
         </div>
         <div className='hero-box-search__btn'>
         <div className='hero-box-search__btn__container'>
          <button>
        <BsSearch />
        </button>
        </div>
        </div>
          </div>
          </div>
           

           <div className='hero-box__low-links'>
        <p>Most Searches</p>
        <a href="">Consultant</a>
        <a href="">Designer</a>
        <a href="">Engineering</a>
        <a href="">Education</a>
        <a href="">Food Service</a> 
        <a href="">Web Designer</a>
        </div>
        </div>
        </div>
        <div className='hero-box__arrow'>
        <img src={Arrow} alt="" />
        </div>
        </div>
       
  )
}

export default Header
