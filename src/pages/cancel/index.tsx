import React from "react";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
import Head from "next/head";
export default function CancelPage() {
  return (
    <Layout hero={true} heroText="We're Sorry to See You Go">
      <Head>
        <title>Appointment Cancelled | The Backdrop</title>
      </Head>
      <div className="layout-wrapper">
        <p>Your appointment has successfully been canceled.</p>
        <Button href="/" text="Return Home" />
      </div>
    </Layout>
  );
}
