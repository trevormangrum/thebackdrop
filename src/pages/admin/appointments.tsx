import React from "react";
import Layout from "src/components/Layout";
import urls from "utils/urls";
import Router from "next/router";
import { NextPageContext } from "next";
export default function AdminAppointmentPage() {
    return (
        <Layout hero={true} heroText="Admin Appointment Management">

        </Layout>
    )
}
export async function getServerSideProps(context: NextPageContext) {
    //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
    const cookie = context.req?.headers.cookie;
    const resp = await fetch(`${urls.baseUrl}${urls.api.admin.validate}`, {
      headers: {
        cookie: cookie!,
      }
    })
    //If the cookie is not present, redirect to the login page.
    if(resp.status === 401 && !context.req) {
      void Router.replace(`${urls.baseUrl}${urls.pages.login}`);
      return { props: {} };
    }
    if(resp.status === 401 && context.req) {
      context.res?.writeHead(302, {
        Location: `${urls.baseUrl}`,
      });
      context.res?.end();
      return { props: {} };
    }
    return { props: {} }
  }