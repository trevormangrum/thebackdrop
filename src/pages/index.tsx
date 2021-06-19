import React from "react";
import { NextPage } from "next";
import InitialView from "src/components/InitialView";
import Polaroid from "src/components/Polaroid";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
const HomePage: NextPage = () => {
  return (
    <Layout>
      <InitialView />
      <section className="layout-wrapper">
        <div className="home-content">
          <div>
            <h2>A Creative Place Where You Can Be Your SELFIE.</h2>
            <p>The Backdrop is a creative space where you can take the perfect selfie. We offer several photo spaces that are filled with professional ring lighting to perfect your images.</p>
            <Button text="About Us" href='/about' />
          </div>
          <Polaroid imageAltText="A test" imageUrl="#" tiltDirection="right"/>
        </div>
        <div className="home-content reverse">
          <div>
            <h2>Photos From The Backdrop.</h2>
            <p>View some of the creative photos that our clients have made in our photo spaces.</p>
            <Button text="Gallery" href='/gallery' />
          </div>
          <Polaroid imageAltText="A test" imageUrl="#" tiltDirection="left"/>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
