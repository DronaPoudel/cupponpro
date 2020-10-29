import React from 'react';
import './style.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="col">
          <h6>CONTACT US</h6>
          <br />
          <ul>
            <li>+44 345 678 903</li>
            <li>cupponpro@gmail.com</li>
            <li>Find a Store</li>
          </ul>
        </div>
        <div className="col">
          <h6>COSTOMER SERVICE</h6>
          <br />
          <ul>
            <li>Ordering & Payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col">

          <h6>INFORMATION</h6>
          <br />
          <ul>
            <li>About Us</li>
            <li>Work With Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Press Enquiries</li>
          </ul>
        </div>
        <div className="col">
          <h6>SUBSCRIBE</h6>

          <br />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
          </p>
          <br />
          <form>
            <TextField
              className="txtinput"
              variant="outlined"
              placeholder="Email Address"
            />
            <Button variant="contained" size="large" className="btn">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="copyright">© CupponPro 2020</div>
      </div>
    </div>
  );
};

export default Footer;
