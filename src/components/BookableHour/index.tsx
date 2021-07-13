import React from "react";
import Button from "src/components/Button";
import { BookableHour } from "utils/types";
interface Props {
    bookableHour: BookableHour;
    setPopupHour({}: BookableHour): void;
}

const BookableHourComponent: React.FC<Props> = ({bookableHour, setPopupHour}) => {
    return (
    <div>
        <h4>{bookableHour.hourPair} {bookableHour.hourPair != "Closed" && `(Remaining slots: ${bookableHour.remainingGroupSize}) ` } </h4>
        { bookableHour.bookable && (
            <Button onClick={() => { setPopupHour(bookableHour) } } text="Select"/>
        )}
    </div>);
};

export default BookableHourComponent;
