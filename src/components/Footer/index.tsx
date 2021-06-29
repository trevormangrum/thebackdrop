import React from "react";
import constants from "utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr />
      <section className="footer-wrapper">
        <div className="footer-section">
          <h3>The Backdrop.</h3>
          <a href="">Pricing</a>
          <a href="">Gallery</a>
          <a href="">Book</a>
        </div>
        <div className="footer-section">
          <h3>About.</h3>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h3>Hours.</h3>
          <div>
            <span>Thursday:</span>
            <span>{constants.businessHours.thursday.opening}-{ constants.businessHours.thursday.closing}</span>
          </div>
          <div>
            <span>Fri-Sat:</span>
            <span>{constants.businessHours.saturday.opening}-{constants.businessHours.saturday.closing}</span>
          </div>
          <div>
            <span>Sunday:</span>
            <span>{constants.businessHours.sunday.opening}-{constants.businessHours.sunday.closing}</span>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact.</h3>
          <address>
            <span>102 B West Court Avenue, Selmer TN, 38375</span>
            <a href="tel:7314347149">731.434.7149</a>
            <a href="mailto:thebackdrop731@gmail.com">
              thebackdrop731@gmail.com
            </a>
          </address>
        </div>
      </section>
      <section className="footer-wrapper">
        <span>
          Website by:{" "}
          <a target="blank" rel="noreferrer" href="https://mangrumtech.com">
            Mangrum Tech
          </a>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
