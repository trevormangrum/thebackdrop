import React from "react";
import Layout from "src/components/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function BookingPage() {
  const [date, getDate] = React.useState({} as Date);
  return (
    <Layout hero={true} heroText="Book">
      <div className="layout-wrapper booking">
        <p>
          Please select a day from the calendar below. Below the calendar you
          will find the times available for the day.{" "}
        </p>
        <Calendar className="book-calendar" onChange={getDate} />
        {date && <h3> Showing times for:</h3>}
      </div>
    </Layout>
  );
}
