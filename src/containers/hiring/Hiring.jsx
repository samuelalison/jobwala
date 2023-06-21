import React from 'react';
import './hiring.css';
import listing from '../../assets/Image.png';
import breakdown from '../../assets/Image (1).png';

const Hiring = () => {
  return (
    <div className='hiring'>
      <div className='hiring-container'>
        <div>
      <p className='hiring_product'>All you will need for hiring activities in one product</p>
      </div>
      <div className='hiring_sides'>
       <div className='hiring_sides__col'>
        
        <div className='hiring-left'>
        <div className='hiring_listing'>
          <img className='hiring_listing__pht' src={listing} alt="" />
        </div>
        <div className='hiring_breakdown'>
          <img className='hiring_breakdown__pht' src={breakdown} alt="" />
        </div>

        </div>
<div className='hiring_right'>
<div className='hiring_right_1'>
  <div className='candidates'>
  <p className='best_cand'>Select from best
candidates</p>
<p className='cand_cv'>158.940 CVs around the world</p>
</div>
</div>
<div className='hiring_right_2'>
  <div className='candidates_2'>
  <p className='best_cand_2'>Sort candidates with
kanban desk</p>
<p className='cand_cv_2'>Start following people from your circle</p>
</div>
</div>
<div className='hiring_right_3'>
  <div className='candidates_3'>
  <p className='best_cand_3'>Connect with desired
professionals</p>
<p className='cand_cv_3'>Desk that helps to manage applications</p>
</div>
</div>
</div>
</div>



      </div>

      </div>

    </div>
  )
}

export default Hiring