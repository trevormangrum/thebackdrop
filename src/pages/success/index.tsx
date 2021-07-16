import React from "react";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
import Head from "next/head";
export default function SuccessPage() {
  return (
    <Layout hero={true} heroText="Appointment Successfully Booked">
      <Head>
        <title>Appointment Successfully Booked! | The Backdrop</title>
      </Head>
      <div className="layout-wrapper">
        <p>
          Thank you for booking an appointment with us! If you enjoy your time
          at our facility, please book again soon!
        </p>
      </div>
      <Button href="/" text="Return Home" />
    </Layout>
  );
}
