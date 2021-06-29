import React from "react";
import Button from "src/components/Button";
interface Props {
    date?: Date;
}

const BookableHour: React.FC<Props> = ({date}) => {
    return (
    <div>
        <h4>{date && date.toDateString()}</h4>
        <Button href="#" text="Select" />
    </div>);
};

export default BookableHour;
