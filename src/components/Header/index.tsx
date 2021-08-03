import React from "react";
import Button from "src/components/Button";
import useHasScrolledDown from "utils/scrolledDown";
import {useRouter} from "next/router";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const hasScrolledDown = useHasScrolledDown();
  const router = useRouter();
  return (
    <>
    <header className={`navigation ${hasScrolledDown ? "with-bg" : ""}`}>
      <div className="nav-wrapper">
        <a href="/" className="logo">
          <img src='logo.png' alt="The Backdrop Logo" />
        </a>
        <nav
          className={`navigation-links ${
            mobileOpen ? "mobile-open" : "mobile-hidden"
          }`}
        >
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQs</a>
          <a href="/gallery">Gallery</a>
          <Button
            href="/book"
            text="Book"
          />
        </nav>
        <div className="nav-button" onClick={() => setMobileOpen(!mobileOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
      {router.pathname != '/' && (
        <div className="spacer"></div>
      )}
    </>
  );
};

export default Header;
