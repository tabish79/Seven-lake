import React from 'react';
import './blockone.css';
import { Button } from '@mui/material';

function BlockOne() {
    return (
        <div className="block-one-container">
            <div style={{width:'100%',display:'flex',justifyContent:'center', height:'auto'}}>
                
            <div className="form-container">
            <div>
    <h1 className="form-header">
        Go anywhere with <br /> Uber
    </h1>
</div>

                <p className="form-paragraph">Request a ride, hop in, and go.</p>
                <div className="button-container" >
                  <button>Inter-city</button>
                  <button>Outstation</button>
                </div>
                <form className="form">
  <div className="input-wrapper">
    <img src={process.env.PUBLIC_URL + '/location.png'} alt="Location" className="input-icon start" />
    <input type="text" placeholder="Enter Location" className="input-field" />
    <img src={process.env.PUBLIC_URL + '/Vector.png'} alt="Vector" className="input-icon end" />
  </div>
  <div className="vertical-line"></div>
  <div className="input-wrapper">
    <img src={process.env.PUBLIC_URL + '/destination.png'} alt="Destination" className="input-icon start" />
    <input type="text" placeholder="Enter Destination" className="input-field" />
  </div>
  <button id="submit-button">See Prices</button>
</form>
            </div>
            </div>

            <div className="image-container">
                <img style={{width:'100%',height:'auto'}}src={process.env.PUBLIC_URL + '/one.png'} alt="Your Image" className="image" />
            </div>
        </div>
    );
}

export default BlockOne;
