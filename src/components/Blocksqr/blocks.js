import React from 'react';
import './blocks.css';

const Blocks = () => {
  return (
      <div style={{backgroundColor:' #f2f2f2'}}>
        <h1  id={"h1id"}style={{marginLeft:'4em',paddingTop:'1em'}}>It's easier in the App</h1>
    <div className="blocks-container">

      <div className="block" style={{display:'flex',justifyContent:'center',margin:'auto'}}>
        <div>
        <img src={process.env.PUBLIC_URL + '/br1.png'} alt="QR Code for Uber App" />
        </div>
        <div>

        <h2>Download Uber App</h2>
        <p>Scan to download</p>
        </div>
      </div>
      <div className="block" style={{display:'flex',justifyContent:'center',margin:'auto'}}>
        <div>

        <img src={process.env.PUBLIC_URL + '/br2.png'} alt="QR Code for Driver App" />
        </div>
        <div>

        <h2>Download Driver App</h2>
        <p>Scan to download</p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Blocks;
