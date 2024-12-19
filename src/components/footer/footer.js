import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <h5>Uber</h5>
        </div>
        <div className="help-center">
          <ul>
            <li><a href="#">Visit Help Center</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our offerings</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">AI</a></li>
            <li><a href="#">Gift cards</a></li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li><a href="#">Ride</a></li>
            <li><a href="#">Drive</a></li>
            <li><a href="#">Deliver</a></li>
            <li><a href="#">Eat</a></li>
            <li><a href="#">Uber for Business</a></li>
            <li><a href="#">Uber Freight</a></li>
          </ul>
        </div>
        <div>
          <h5>Global citizenship</h5>
          <ul>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Diversity and Inclusion</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h5>Travel</h5>
          <ul>
            <li><a href="#">Reserve</a></li>
            <li><a href="#">Airports</a></li>
            <li><a href="#">Cities</a></li>
          </ul>

        </div>
      </div>

      <div className="footer-social">

        <div className="social-media">
          <a href="#"><img src={process.env.PUBLIC_URL + '/fb.png'} alt="Facebook" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/x.png'} alt="Twitter" /></a>
          <a href="#"><img  src={process.env.PUBLIC_URL + '/yt.png'} alt="youtube" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/lk.png'} alt="Linkedln" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/ig.png'} alt="Instagram" /></a>
      
        </div>
        <div className="engsan" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div style={{marginLeft:'14px',marginRight:'14px'}}>English</div>
          <div style={{width:'16em'}}>San Francisco Bay Area</div>
        </div>
      </div>
        <div className="store-links">
          <a href="#"><img src={process.env.PUBLIC_URL + '/apple.png'} alt="App Store" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/Google.png'} alt="Google Play" /></a>
        </div>
     
      <div className="footer-bottom">
        <div className="footer-legal">
          <p>© 2024 Uber Technologies Inc.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
