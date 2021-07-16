import React from "react";
import constants from "utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr />
      <section className="footer-wrapper">
        <div className="footer-section">
          <h3>The Backdrop.</h3>
          <a href="/gallery">Gallery</a>
          <a href="/book">Book</a>
        </div>
        <div className="footer-section">
          <h3>About.</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h3>Hours.</h3>
          <div>
            <span>Thursday:</span>
            <span>{constants.businessHours.thursday}</span>
          </div>
          <div>
            <span>Fri-Sat:</span>
            <span>{constants.businessHours.saturday}</span>
          </div>
          <div>
            <span>Sunday:</span>
            <span>{constants.businessHours.sunday}</span>
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
