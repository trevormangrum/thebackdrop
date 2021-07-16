import { NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";
import Head from "next/head";
const ContactPage: NextPage = () => {
  return (
    <Layout hero={true} heroText="Contact Us">
      <Head>
        <title>Contact Us | The Backdrop</title>
        <meta
          name="description"
          content="View our contact information at The Backdrop."
        />
      </Head>
      <section className="layout-wrapper">
        <div className="home-content">
          <div>
            <h2>Our Contact Information</h2>
            <p>
              Phone: <a href="tel:7314347149">731.434.7149</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:thebackdrop731@gmail.com">
                thebackdrop731@gmail.com
              </a>
            </p>
            <p>Address: 102 B West Court Avenue, Selmer TN, 38375</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.736274098397!2d-88.59294232164287!3d35.169772990134526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887dccfc3923ef75%3A0xbbaa5b67239426ec!2s102%20W%20Court%20Ave%2C%20Selmer%2C%20TN%2038375!5e0!3m2!1sen!2sus!4v1624123807587!5m2!1sen!2sus"
            loading="lazy"
            className="iframe"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
