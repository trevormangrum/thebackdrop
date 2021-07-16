import React from "react";
import Layout from "src/components/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useDate from "utils/useDate";
import { IDate, BookableHour } from "utils/types";
import BookableHourComponent from "src/components/BookableHour";
import BookableHourViewer from "src/components/BookableHourViewer";
import Head from "next/head";
export default function BookingPage() {
  const [date, getDate] = React.useState<IDate>();
  const [displayHourInfo, setDisplayHourInfo] = React.useState(false);
  const [popupHour, setPopupHour] = React.useState({} as BookableHour);
  const { data, isLoading, error } = useDate(date);
  const onChange = (value: Date, event: React.SyntheticEvent) => {
    event.persist();
    getDate(value);
    setDisplayHourInfo(true);
    //Can use this function to display the pop up to pick a time
  };
  //Make it so you can't scroll if the popup is enabled.
  React.useEffect(() => {
    if (popupHour && popupHour.bookable != undefined) {
      window.scroll(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overlay";
    }
  }, [popupHour]);
  return (
    <Layout hero={true} heroText="Book">
      <Head>
        <title>Book an Appointment | The Backdrop</title>
        <meta
          name="description"
          content="Book an hour for up to 10 people at The Backdrop, for $25.00/hr per person."
        />
      </Head>
      <div className="layout-wrapper booking">
        {data && !isLoading && (
          <BookableHourViewer
            popupHour={popupHour}
            setPopupHour={setPopupHour}
            date={date}
          />
        )}
        <p>
          Please select a day from the calendar below. Below the calendar you
          will find the times available for the day.{" "}
        </p>
        <Calendar className="book-calendar" onChange={onChange} />
        {displayHourInfo && date && (
          <h4>
            Showing times for {date instanceof Date && date.toDateString()}:
          </h4>
        )}
        {date &&
          data &&
          !isLoading &&
          !error &&
          data.payload.map((bookableHour: BookableHour) => {
            return (
              <BookableHourComponent
                bookableHour={bookableHour}
                setPopupHour={setPopupHour}
              />
            );
          })}
      </div>
    </Layout>
  );
}
