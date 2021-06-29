import React from "react";
import Button from "src/components/Button";
import { BookableHour } from "utils/types";
interface Props {
    bookableHour: BookableHour;
}

const BookableHourComponent: React.FC<Props> = ({bookableHour}) => {
    return (
    <div>
        <h4>{bookableHour.hourPair} {bookableHour.hourPair != "Closed" && `(Remaining slots: ${bookableHour.remainingGroupSize}) ` } </h4>
        { bookableHour.bookable && (
        <Button href="#" text="Select" />
        )}
    </div>);
};

export default BookableHourComponent;
