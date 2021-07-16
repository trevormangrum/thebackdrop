import React from 'react';
import { AppointmentDocument } from 'server/models/Appointment';
import {IoIosPeople, IoMdClock, IoMdPhonePortrait} from "react-icons/io";
interface Props {
    appointment: AppointmentDocument;
    mutate(data?: any, shouldRevalidate?: boolean): Promise<any>;
}
const AppointmentCard: React.FC<Props> = ({appointment, mutate}) => {
    const deleteAppointment = async (e:React.SyntheticEvent) => {
        const response = await fetch(`/api/admin/appointments?id=${appointment._id}`, {
            method: "DELETE",
        });
        if(response.status === 200) {
            //Refresh the list of appointments.
            mutate(null, true);
        }
    }
    return (
        <div className="appointment-card">
            <div className="appointment-wrapper">
                <div className="appointment-info-container">
                    <IoMdPhonePortrait />
                    <span>{appointment.phone}</span>
                </div>
                <div className="appointment-info-container">
                    <IoMdClock />
                    <span>{appointment.time}</span>
                </div>
                <div className="appointment-info-container">
                    <IoIosPeople />
                    <span>{appointment.groupSize}</span>
                </div>
                <button onClick={deleteAppointment} className="appointment-btn">Delete Appointment</button>
            </div>
        </div>
    );
}
export default AppointmentCard;