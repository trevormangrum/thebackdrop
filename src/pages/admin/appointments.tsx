import React from "react";
import Layout from "src/components/Layout";
import urls from "utils/urls";
import Router from "next/router";
import { NextPageContext } from "next";
import useSWR from "swr";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentCard from "src/components/AppointmentCard";
import { AppointmentDocument } from "server/models/Appointment";
export default function AdminAppointmentPage() {
  //Use today as the default date to view. Has to be done this way to match the format that React Calendar outputs.
  const today = () =>  {const date = new Date(); return new Date(date.setHours(12))};
  const [dateToView, setDateToView] = React.useState(new Date(today().toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric"})));
  const fetcher = (url:string) => fetch(url).then(r => r.json());
  const {data, error, mutate} = useSWR(`/api/admin/appointments?date=${dateToView.toLocaleString("en-US", {day: "numeric", month: "numeric", year:"numeric"})}`, fetcher, {
    refreshInterval: 1000,
  });
  const handleChange = (value: Date, e: React.SyntheticEvent) => {
    e.persist();
    setDateToView(value);
  }
    return (
        <Layout hero={true} heroText="Admin Appointment Management">
          <div className="layout-wrapper">
            <p>Below you will find a mini calendar displaying the current date, and all PAID appointments for that day. Use the calendar below to view appointments on different days. You can click an appointment's "DELETE" button to clear that appointment from the list. Refunds will have to be handled through Stripe, so cancelling an appointment here doesn't cancel its payment. However, it will free up a slot for someone else to book. The list will refresh automatically after an appointment is deleted.</p>
            <div className="date-selector-container">
              <Calendar onChange={handleChange} />
            </div>
            <div className="appointment-container">
              {data && !error && data.payload.length > 0 && (
                data.payload.map((appointment:AppointmentDocument) => {
                  return <AppointmentCard key={appointment._id} mutate={mutate} appointment={appointment}/>
                })
              )}
              {!data && !error && (
                <h1>Loading...</h1>
              )}
            </div>
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
