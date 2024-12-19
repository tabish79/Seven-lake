import React from 'react';
import './blockthree.css';

const BlockThree = () => {
  return (
    <div className="block-three-container">
      <div  className={"textcontainer"} >

      <div className="text-container">
        <h2>The Uber you know, reimagined for business</h2>
        <p>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
        <button style={{marginRight:'10%',borderRadius:'8px',fontWeight:'500',fontSize:'15.63px',fontFamily:'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>Get started</button>
        <span className='accountbox'>Check out our solutions</span>
      </div>
      </div>
      <div className="image-container">
        <img style={{height:'100%' ,width:'90%',fontWeight:'400',fontSize:'15.5px',fontFamily:'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'}} src={process.env.PUBLIC_URL + '/two.png'} alt="Uber for Business" />
      </div>
    </div>
  );
};

export default BlockThree;
