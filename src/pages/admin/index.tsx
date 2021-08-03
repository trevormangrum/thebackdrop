import { NextPage, NextPageContext } from "next";
import React from "react";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
import urls from "utils/urls";
import Router from "next/router";
export default function AdminHomePage() {
    return (
        <Layout hero={true} heroText="Welcome to the Admin Portal">
            <div className="layout-wrapper">
                <p>Welcome to the Admin Portal. Here, you can view and delete appointments for a given day. Click the button below to get started.</p>
                <Button href="/admin/appointments" text="Admin Appointment Management" />
            </div>
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
