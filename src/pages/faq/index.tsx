import React from "react";
import { NextPage } from "next";
import Layout from "src/components/Layout";
import Head from "next/head";
const FAQPage: NextPage = () => {
  return (
    <Layout hero={true} heroText="Frequently Asked Questions">
      <Head>
        <title>Frequently Asked Questions | The Backdrop</title>
        <meta
          name="description"
          content="View frequently asked questions about The Backdrop's creative spaces and tickets."
        />
      </Head>
      <section className="layout-wrapper">
        <h3>How do I get tickets?</h3>
        <p>Tickets can be purchased online subject to availability.</p>
        <h3>Do I have to buy a ticket if I'm not taking photos?</h3>
        <p>
          Yes! Every person entering the facility must pay the admission. We
          only allow a certain number of people per hour to make your experience
          more comfortable for you. For this reason, every person entering must
          pay admissions.
        </p>
        <h3>Are walk-ins welcome?</h3>
        <p>At this time, we are taking appointments by reservations only.</p>
        <h3>What should I bring with me?</h3>
        <p>
          Bring your cell phone or camera and all of your friends and family!
          You are allowed to bring small props and/or changes of clothes if you
          would like. No extra camera gear allowed.
        </p>
        <h3>What is your cancellation policy?</h3>
        <p>
          All tickets are non-refundable. You may reschedule for a different
          date/time within 48 hours of your scheduled time.
        </p>
        <h3>Are you kid friendly?</h3>
        <p>Yes! Please bring your entire family.</p>
        <h3>Are you pet friendly?</h3>
        <p>
          Yes! Please bring your family pet. (If any other guests are
          uncomfortable or feel threatened by your pet, we will have to ask you
          to take them back to your vehicle for the remainder of your time.)
        </p>
        <h3>Do I have to stay with my child or can I leave them?</h3>
        <p>
          If your child is 12 or older, you can leave them here. If they are
          under 12 years old, a parent is permitted to attend and supervise. For
          every 3 children under 12, a parent is required to supervise. You are
          responsible if anything is damaged in the facility.
        </p>
      </section>
    </Layout>
  );
};
export default FAQPage;
