import React from 'react';

const Heading = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '55px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '5px' }}>Home</span>
        <i className="material-icons" style={{ margin: '0 5px', color: '#ccc' }}>chevron_right</i>
        <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>Blog</span>
      </div>
      <h1 style={{ marginTop: '10px' }}>Blog</h1>
    </div>
  );
};

export default Heading;
