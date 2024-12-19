import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import './navbar.css'; 

function Navbar() {
    return (
        <div className='mainbg'>
            
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-links">
                    <a href="/" className="navbar-link" style={{fontSize:'1.4em'}}>Uber</a>
                    <a href="/ride" className="navbar-link">Ride</a>
                    <a href="/drive" className="navbar-link">Drive</a>
                    <a href="/business" className="navbar-link">Business</a>
                    <a href="/ubereats" className="navbar-link">Uber Eats</a>
                    <a href="/about" className="navbar-link">About</a>
                </div>
                <div className="navbar-actions">
                    <div className="navbar-icon">
                    <img src={process.env.PUBLIC_URL + '/country.png'} style={{marginRight:'10px'}} alt="country" className="country " />
                        <span>EN</span>
                    </div>
                    <a href="#" className="navbar-action">Help</a>
                    <a href="#" className="navbar-action">Log In</a>
                    <button 
  className="navbar-action" style={{  color: '#000',   padding: '9px',   borderRadius: '30px',   fontFamily: 'Inter',   fontWeight: 500,   fontSize: '13.89px',   lineHeight: '16px',   textAlign: 'center'}}
>
  Sign Up
</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
