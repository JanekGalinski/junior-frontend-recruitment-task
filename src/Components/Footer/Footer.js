import React from 'react';
import './Footer.css';
import logo from '../../Assets/img/logo.svg'
import facebook from '../../Assets/img/icon-facebook.svg'
import twitter from '../../Assets/img/icon-twitter.svg'
import youtube from '../../Assets/img/icon-youtube.svg'
import linkedin from '../../Assets/img/icon-linkedin.svg'

function Footer() {

  let iconSrc = logo;
  let facebookSrc = facebook;
  let twitterSrc = twitter;
  let youtubeSrc = youtube;
  let linkedinSrc = linkedin;
  
  return (
    <footer>
      <div className="container">
        <div className="footer-icons">
          <div className="footer-icons-logo">
            <img src={iconSrc}></img>
          </div>
          <div className="footer-icons-media">
            <img className="footer-icons-media-icon" src={twitterSrc}></img>
            <img className="footer-icons-media-icon" src={youtubeSrc}></img>
            <img className="footer-icons-media-icon" src={linkedinSrc}></img>
            <img className="footer-icons-media-icon" src={facebookSrc}></img>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-text">
          <div className="footer-text-highlight">
            <p className="footer-text-highlight-letters">2020 © Figma</p>
            <p className="footer-text-highlight-letters">Polityka prywatności</p>
          </div>
          <div className="footer-text-small">
            <p className="footer-text-small-letters">Consequat justo, elementum enim lobortis. Euismod cras libero, arcu tristique nibh donec ornare gravida sem. Sed iaculis euismod tristique sed libero consequat. Ultrices vitae senectus amet elementum sed tellus nisl orci vestibulum.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
