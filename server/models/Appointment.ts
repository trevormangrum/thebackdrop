//Code inspired by mindversity website https://github.com/hack4impact-utk/mindversity-website/blob/develop/server/models/User.ts
import { Document, model, models, Model, Schema} from "mongoose";
import { Appointment } from "utils/types";
export const AppointmentSchema = new Schema({
    groupName: {
        type: String,
        required: true,
    },
    day: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    groupSize: {
        type: Number,
        required: true,
    },
    timeBooked: {
        type: Date,
        required: true,
    },
    paid: {
        type: Boolean,
        required: true,
    }
})


export interface AppointmentDocument extends Appointment, Document {}
export default (models.Appointment as Model<AppointmentDocument, Record<string, unknown>>) || model<AppointmentDocument>("Appointment", AppointmentSchema);
