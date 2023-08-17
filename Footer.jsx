import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> 11w New Road,Bangalore-02291,India</p>
        <p className="p__opensans"> +91-9123-33911</p>
        <p className="p__opensans"> +91-8429-81921</p>

      </div>

      <div className="app__footer-links_logo">
        <img src={images.GrillBar3} alt="logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{
            marginTop: 10,
          }}
          alt=""
        />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">01:00 pm - 01:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">02:00 pm - 02:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 @Anupam.All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
