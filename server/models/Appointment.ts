//Code inspired by mindversity website https://github.com/hack4impact-utk/mindversity-website/blob/develop/server/models/User.ts
import { Document, model, models, Model, Schema} from "mongoose";

export const AppointmentSchema = new Schema({
    groupName: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    groupSize: {
        type: Number,
        required: true,
    }
})

export interface Appointment {
    groupName?: string;
    day?: string;
    time?: string;
    groupSize?: number;
}

export interface AppointmentDocument extends Appointment, Document {}
export default (models.Appointment as Model<AppointmentDocument, Record<string, unknown>>) || model<AppointmentDocument>("Appointment", AppointmentSchema);