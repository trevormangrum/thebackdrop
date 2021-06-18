import React from "react";
import Button from "src/components/Button";
import useHasScrolledDown from "utils/scrolledDown";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const hasScrolledDown = useHasScrolledDown();
  return (
    <header className={`navigation ${hasScrolledDown ? "with-bg": "" }`}>
      <div className="nav-wrapper">
        <a href="/" className="logo">
          The Backdrop
        </a>
        <nav
          className={`navigation-links ${
            mobileOpen ? "mobile-open" : "mobile-hidden"
          }`}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Pricing</a>
          <a href="#">Gallery</a>
          <Button href="/book" text="Book" />
        </nav>
        <div className="nav-button" onClick={() => setMobileOpen(!mobileOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
