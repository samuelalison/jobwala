import React from 'react'
import './manage.css';
import people from '../../assets/people.png';
import good from '../../assets/good.png';
import green from '../../assets/green.png';
import call from '../../assets/call.png';
import red from '../../assets/Dribble_red.png';
import yellow from '../../assets/Dribble_yellow.png';
import Dgreen from '../../assets/Dribbble_green.png';
import blue from '../../assets/Dribbble 2.png';

const Manage = () => {
  return (
<div className='manage'>
<div className="manage-container">


<div className="manage_title">
<h2>Manage your hiring campaign</h2>
</div>



<div className="box-container">


<div className="manage_box_1">
<div className="manage_box_people">
<img src={red} alt="" />
<img className='red' src={people} alt="" />
</div>
<p className='manage_box_people-finder'>Find people from any
locations</p>
<p className='manage_box_people-finder_20m'>20M CVs around the world</p>
</div>




<div className="manage_box_2">
<div className="manage_box_call">
<img src={yellow} alt="" />
<img className='red' src={good} alt="" />
</div>
<p className='manage_box_people-finder'>Find people from any
locations</p>
<p className='manage_box_people-finder_20m'>We confirm each user
profile</p>
</div> 




<div className="manage_box_3">
<div className="manage_box_green">
<img src={Dgreen} alt="" />
<img className='red' src={green} alt="" />
</div>
<p className='manage_box_people-finder'>Follow
professionals</p>
<p className='manage_box_people-finder_20m'>Start following people
from your circle</p>
</div> 



<div className="manage_box_4">
<div className="manage_box_call">
<img src={blue} alt="" />
<img className='red' src={call} alt="" />
</div>
<p className='manage_box_people-finder'>Schedule calls and
make offers</p>
<p className='manage_box_people-finder_20m'>Job desk that helps to
manage applications</p>
</div> 
</div>
</div>

      
    </div>
  )
}

export default Manage