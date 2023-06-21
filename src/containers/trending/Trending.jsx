import React from 'react';
import './trending.css';
import more from '../../assets/more.png';
import group from '../../assets/Group.png';
import google from '../../assets/Google.png';
import facebook from '../../assets/Facebook.png';
import pointer from '../../assets/Point.png';

const Trending = () => {
  return (
    <div className='trending'>
    <div className='trending-container'>
 
    <div className='trending_header'>
    <div className='trending_header_title'>
      <h4>Trending jobs near you</h4>
    </div>
      <div className='trending-job'>
        <div className='trending-job__more-tag'>
       <img className='trending-job__more-tag_pht' src={more} alt="" />
       <a href="#">See all jobs</a>
       </div>
      </div>
    </div>

    <div className='trending-box'>

    <div className='trending-box__small_1'>
      <img className='trending-box__small_1_pht' src={group} alt="" />
      <p className='trending-box__small_1__crisis'>Crisis Intervention Specialist</p>

      <div className='trending-box__small_1__london'>
      <p className='trending-box__small_1__london-p1'>London</p>
      <img className='pointer' src={pointer} alt="" />
      <p className='trending-box__small_1__london-p2'>Dribble Inc.</p>
      </div>

      <div className='trending-box-pay'>
        <p>$50k - $55k per month</p>
      </div>
    </div>

    <div className='trending-box__small_2'>
      <img className='trending-box__small_2_pht' src={google} alt="" />
      <p className='trending-box__small_2__virtual'>Virtual Scheduler - Remote</p>

      <div className='trending-box__small_2__new-york'>
      <p className='trending-box__small_2__new-york-p1'>New York</p>
      <img className='pointer' src={pointer} alt="" />
      <p className='trending-box__small_2__new-york-p2'>Google Inc.</p>
      </div>

      <div className='trending-box-pay'>
        <p>$40k - $48k per month</p>
      </div>
    </div>


    <div className='trending-box__small_3'>
      <img src={facebook} alt="" />
      <p className='trending-box__small_3__patient'>Patient Care Adovcate</p>
      <div className='trending-box__small_3__washington'>
      <p className='trending-box__small_3__washington-p1'>Washington</p>
      <img className='pointer' src={pointer} alt="" />
      <p className='trending-box__small_3__washington-p2'>Resources Inc.</p>
      </div>
      <div  className='trending-box-pay'>
        <p>$50k - $55k per month</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Trending