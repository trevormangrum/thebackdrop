import React from "react";
import { BookableHour, IDate } from "utils/types";
import Button from "src/components/Button";
import { useRouter } from "next/router";
interface Props {
    popupHour: BookableHour;
    setPopupHour({}: BookableHour): void;
    date?: IDate;
}
const BookableHourViewer: React.FC<Props> = ({
    popupHour,
    setPopupHour,
    date,
}) => {
    const router = useRouter();
    //Sends a request to get the checkout link from the API.
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!values.phone || !values.groupSize) {
            displayError(true);
            return;
        } else {
            //Set the appointment date and time.
            displayError(false);
            //Make our fetch request.
            const response = await fetch('/api/checkout', {
                method:"POST",
                body: JSON.stringify(values),
            });
            const data = await response.json();
            router.push(data.payload); 
        }
    };
    //Create an array of option elements based on the remaining group size for a given hour set.
    const populateOptions = () => {
        let rgsArray: number[] = [];
        for (let i = 0; i <= popupHour.remainingGroupSize - 1; i++) {
            rgsArray.push(i + 1);
        }
        return rgsArray.map((num, index) => {
            return (
                <option key={index} value={num}>
                    {num}
                </option>
            );
        });
    };
    //Stores values for phone number and group size;
    const handleChange = (e: React.SyntheticEvent) => {
        e.persist();
        const target = e.target as HTMLInputElement;
        setValues((values) => ({ ...values, [target.name]: target.value }));
        if(!values.day || !values.time) {
            setValues((values) => ({...values, ["day"]: date}));
            setValues((values) => ({...values, ["time"]: popupHour.hourPair}));
        }
    };
    const [values, setValues] = React.useState({});
    const [error, displayError] = React.useState(false);
    return (
        <div
            className={`gallery-photo-viewer ${
                popupHour && popupHour.bookable != undefined ? "visible" : ""
            }`}
        >
            <div className="gallery-overlay"></div>
            <div className="gallery-text-viewer-content">
                <div className="gallery-button-container">
                    <button onClick={() => setPopupHour({} as BookableHour)}>
                        X
                    </button>
                </div>
                <h4>
                    Booking slots for: {popupHour ? popupHour.hourPair : ""} on{" "}
                    {date ? (date as Date).toDateString() : ""}:{" "}
                </h4>
                <label htmlFor="phone">Phone Number: </label>
                <input
                    name="phone"
                    type="tel"
                    placeholder="000-000-0000"
                    value={values.phone || ""}
                    onChange={handleChange}
                />
                <label htmlFor="groupSize">Group Size:</label>
                <select name="groupSize" onChange={handleChange}>
                    <option value={""}>
                        Please select how many are coming.
                    </option>
                    {popupHour &&
                        popupHour.remainingGroupSize != undefined &&
                        populateOptions()}
                </select>
                { error && <p className="error">You must fill out the fields above to proceed to checkout.</p>}
                <Button onClick={handleSubmit} text="Proceed to Checkout" />
            </div>
        </div>
    );
};
export default BookableHourViewer;
