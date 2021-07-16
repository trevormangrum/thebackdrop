import Layout from "src/components/Layout";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <Layout hero={true} heroText={"Privacy Policy"}>
      <Head>
        <title>Our Privacy Policy | The Backdrop</title>
        <meta
          name="description"
          content="Here you can view The Backdrop's privacy policy, which contains information regarding what data we collect, how it is used, and what you can do regarding your data."
        />
      </Head>
      <div className="layout-wrapper">
        <p>
          The following is the The Backdrop, LLC privacy policy. "The Backdrop,"
          or "we" or "us" refers to The Backdrop, LLC. This Privacy Policy
          applies whenever you access our website or any other domains owned by
          The Backdrop. This Privacy Policy describes:
        </p>
        <ul>
          <li>
            What information we collect, how it is collected, and why it is
            collected
          </li>
          <li>How your information is used and with whom it is shared</li>
          <li>
            What choices you can make about how we collect, use and share your
            information
          </li>
          <li>How we protect the information we store about you</li>
        </ul>
        <h2>Children Under 13.</h2>
        <p>
          The Backdrop does not knowingly collect personal information from
          children under 13. If you are under 13, please do not provide any
          information on this Website.
        </p>
        <h2>Information That We Collect.</h2>
        <h3>Information That You Give Us.</h3>
        <h4>Appointment Booking</h4>
        <p>
          When you book an appointment on our site, you must provide us with a
          phone number. We collect this data to provide you with an efficient
          and streamlined service. This data is also used in the event that you
          need to make changes to your appointment. Payment information is
          handled through our payment provider, Stripe. For more information
          about how they handle your payment data, visit their privacy policy.
        </p>
        <h3>Information Collected Automatically.</h3>
        <h4>Google Analytics</h4>
        <p>
          When you interact with our Site, we receive and store information
          using a technology called Google Analytics. Google Analytics is a tool
          created by Google that is used to monitor and analyze website traffic.
          Google Analytics works by using a technology known as cookies, which
          are small documents that contain information and are stored on the
          user's browser. Google Analytics places a cookie in your browser and
          collects information such as:
        </p>
        <ul>
          <li>Usage data regarding the pages you visit on our Website</li>
          <li>Your IP address</li>
          <li>The device you access our Site on</li>
          <li>The browser type and version you access our Site on</li>
          <li>The amount of time you spent on each webpage on our Site</li>
        </ul>
        <p>
          We will never sell your information to any third party or use it for
          any other purposes than those listed above.
        </p>
        <h2>Data Retention.</h2>
        <p>
          Your data is only stored in our system until one day after your
          appointment. After that, your data is removed from our system.
        </p>
        <h2>Your Choices Regarding Your Data.</h2>
        <p>
          If you would like to opt-out of Google Analytics, you can do so by
          installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout">
            Google Analytics Opt-out Browser Extension
          </a>
          .
        </p>
        <p>
          All other data we collect is voluntarily submitted. To use our contact
          form and subscription purchasing services, you must voluntarily
          provide your data.
        </p>
        <h2>Changes to our Privacy Policy.</h2>
        <p>
          This Privacy Policy may be revised over time as new features are added
          to the The Backdrop website. We may change this Privacy Policy at any
          time by posting a revised version to our Website.
        </p>
      </div>
    </Layout>
  );
}
