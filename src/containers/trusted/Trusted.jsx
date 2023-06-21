import React from 'react';
import './trusted.css';
import microsoft from '../../assets/image 5.png'; 
import IBM from '../../assets/image 6.png' ;
import amazon from '../../assets/image 7.png' ;
import ebay from '../../assets/image 8.png' ;
import dropbox from '../../assets/image 9.png' ;

const Trusted = () => {
  return (
<div className='trusted'>
<div className='trusted-container'>
<div className='trusted-jobs'> 
<h2>Trusted by Job holders from</h2>
</div>

<div className='cta'>
  <img src={microsoft} alt="" />
  <img src={IBM} alt="" />
  <img src={amazon} alt="" />
  <img src={ebay} alt="" />
  <img src={dropbox} alt="" />
  <img src={amazon} alt="" />
</div>
</div>
</div>
  )
}

export default Trusted;