import { NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";
import Head from "next/head";
const AboutPage: NextPage = () => {
  <Head>
    <title>About Us | The Backdrop</title>
    <meta
      name="description"
      content="Learn more about The Backdrop, a creative place where you can be your SELFIE."
    />
  </Head>;
  return (
    <Layout hero={true} heroText="About Us">
      <section className="layout-wrapper">
        <p>
          Welcome to The Backdrop, a beautiful creative space where you can be
          your SELFIE!
        </p>
        <h2>What is The Backdrop?</h2>
        <p>
          The Backdrop is a beautiful space we have created for you to take the
          perfect selfie. If you are looking for that perfect backdrop or scene
          for your Instagram or TikTok, we have you covered. If you are looking
          for something new and fun to do with your best friends, The Backdrop
          is the place to be.
        </p>
        <h3>Our Spaces</h3>
        <p>
          Each space is complete with professional ring lighting to perfect your
          images. You will have 1 hour in the space to enjoy all the gorgeous
          creative scenes and create the perfect social media worthy photos.
        </p>
        <h3>Admission</h3>
        <p>
          Each person entering must pay the Admission fee to enter the facility
          whether you will be taking pictures or not. You will share the
          facility with other guests unless you are the only one booked at your
          specific time, or you book a private session. For more information
          regarding private booking or parties, please{" "}
          <a href="mailto:thebackdrop731@gmail.com">contact us by email.</a>
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
