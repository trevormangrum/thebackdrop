import React from "react";
import { BookableHour, IDate } from "utils/types";
interface Props {
    popupHour: BookableHour;
    setPopupHour({}: BookableHour): void;
    date?: IDate;
}
const BookableHourViewer: React.FC<Props> = ({ popupHour, setPopupHour, date }) => {
    return (
        <div
            className={`gallery-photo-viewer ${
                popupHour && popupHour.bookable != undefined ? "visible" : ""
            }`}
        >
            <div className="gallery-overlay"></div>
            <div className="gallery-photo-viewer-content">
                <div className="gallery-button-container">
                    <button
                        onClick={() => setPopupHour({} as BookableHour)}
                    >X</button>
                </div>
                <h3>Booking slots for {popupHour ? popupHour.hourPair : ""} on {date ? (date as Date).toDateString() : ""}: </h3>
                <label htmlFor="phone">Phone Number: </label>
                <label htmlFor="groupSize">Group Size:</label>
            </div>
        </div>
    );
};
export default BookableHourViewer;
