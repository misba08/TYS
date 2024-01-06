import React from 'react';

const Box = ({ id, imageUrl, title, boldHeading, paragraph }) => (
  <div key={id} className="box">
    <img src={imageUrl} alt="Box" />
    <div className='sub-box'>
      <h2 style={{fontSize:'16px', color: '#b3b3b3'}}>{title}</h2>
      <h3 style={{fontSize:'26px'}}>{boldHeading}</h3>
      <p style={{color:'gray'}}>{paragraph}</p>
    </div>
  </div>
);

export default Box;
