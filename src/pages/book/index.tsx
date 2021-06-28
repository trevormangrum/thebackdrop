import React from "react";
import Layout from "src/components/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useDate from "utils/useDate";
import { IDate } from "utils/types";
export default function BookingPage() {


  const [date, getDate] = React.useState<IDate>();
  const [displayHourInfo, setDisplayHourInfo] = React.useState(false);
  const { data, isLoading, error } = useDate(date);
  const onChange = (value: Date, event: React.SyntheticEvent) => {
    event.persist();
    getDate(value);
    setDisplayHourInfo(true);
    //Can use this function to display the pop up to pick a time
  };
  return (
    <Layout hero={true} heroText="Book">
      <div className="layout-wrapper booking">
        <p>
          Please select a day from the calendar below. Below the calendar you
          will find the times available for the day.{" "}
        </p>
        <Calendar className="book-calendar" onChange={onChange} />
        {displayHourInfo && date && <h4>Showing times for {date.toDateString()}:</h4>}
      </div>
    </Layout>
  );
}
