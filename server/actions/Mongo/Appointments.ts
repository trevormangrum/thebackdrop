import { Appointment, BookableHour } from "utils/types";
import constants from "utils/constants";
import mongoDB from "server/actions/Mongo";
import AppointmentSchema from "server/models/Appointment";
import { AppointmentDocument } from "server/models/Appointment";

export const getBookableHoursOnDay = async (
  day: Date
): Promise<BookableHour[]> => {
  const hourPairs = getBusinessHoursOnDay(day);
  if (hourPairs == ["Closed"])
    return [{ hourPair: "Closed", remainingGroupSize: 10, bookable: false }];

  return await Promise.all(
    hourPairs.map(async (hourPair) => {
      let totalPeople = await getTotalPeopleInHours(day, hourPair);
      return {
        hourPair: hourPair,
        remainingGroupSize: 10 - totalPeople,
        bookable: totalPeople < 10 && hourPair != "Closed" ? true : false,
      };
    })
  );
};
/**
 * Gets the total number of people booked for a given day and hour pair. Can be used to verify whether or not an appointment is actually available.
 * @param day The day of the appointment
 * @param hourPair the hour pair of the appointment (ex: 2:00PM-3:00PM)
 * @returns The total number of people that have booked in a given hour pair and day.
 */
export const getTotalPeopleInHours = async (
  day: Date,
  hourPair: string
): Promise<number> => {
  await mongoDB();
  const appointments = await AppointmentSchema.find({
    day: day,
    time: hourPair,
  });
  if (appointments.length > 0) {
    //go through every appointment and get the group size.
    const totalPeople = appointments.reduce(
      (total: number, appointment: AppointmentDocument) => {
        return total + (appointment.groupSize as number);
      },
      0
    );
    return totalPeople;
  }
  //No appointments, no people
  return 0;
};
/**
 * Creates an appointment based on given appointment information.
 * @param appointment The appointment information to be used in creation.
 * @returns an Appointment object from MongoDB.
 */
export const createAppointment = async (
  appointment: Appointment
): Promise<AppointmentDocument> => {
  console.log(appointment);
  await mongoDB();
  const createdApp = await AppointmentSchema.create(appointment);
  console.log("appointment created");
  return createdApp;
};
/**
 * Retrieves all sets of hour pairs during opening hours on a given business day.
 * @param day The day to retrieve business hours on.
 * @returns An array of strings that represent hour pairs (ex: 2:00PM-3:00PM)
<<<<<<< HEAD
=======

>>>>>>> 9a9c0e2b2129b29b0f4dae4f22b83b224b901930
 */
export const getBusinessHoursOnDay = (day: Date): string[] => {
  let hours;
  switch (day.getDay()) {
    case 0:
      //Sunday
      hours = constants.businessHours.sunday;
      break;
    case 1:
    case 2:
    case 3:
      //Business is not open on Monday, Tuesday, or Wednesday
      return ["Closed"];
    case 4:
      //Thursday
      hours = constants.businessHours.thursday;
      break;
    case 5:
    case 6:
      //Friday and Saturday have the same opening/closing hours
      hours = constants.businessHours.friday;
      break;
  }

  const [opening, closing] = parseHours(hours as string);
  return getHourPairs(opening.hour, closing.hour);
};

/**
 * Delete an appointment in mongo by its ID.
 * @param id The MongoDB id of the appointment that needs to be deleted.
 */
export const deleteAppointmentByID = async (id: string) => {
  await mongoDB();
  await AppointmentSchema.findByIdAndDelete(id);
  console.log("Appointment successfully deleted.");
};
/**
 * Updates an appointment's payment status after the checkout has been completed.
 * @param id The id of the appointment to be updated.
 */
export const updateAppointmentPaymentById = async (
  id: string
): Promise<void> => {
  await mongoDB();
  const oldAppointment = { _id: id };
  await AppointmentSchema.findOneAndUpdate(
    oldAppointment,
    { paid: true },
    { upsert: false }
  );
  console.log("Appointment successfully updated.");
};
/**
 * Gets appointments by date.
 * @param date The date to retrieve appointments from
 * @returns An array of appointments.
 */
export const getAppointmentsByDate = async (date: Date) => {
  await mongoDB();
  const appointments = await AppointmentSchema.find({ day: date });
  console.log(appointments);
  return appointments;
};

export const cleanUpAppointments = async () => {
  await mongoDB();
  const today = new Date();
  const todaysAppointments = await AppointmentSchema.find({ day: today });
  if (todaysAppointments.length > 0) {
    todaysAppointments.forEach(async (appointment) => {
      if (
        today.valueOf() - appointment.timeBooked!.valueOf() >= 10 * 60 * 1000 &&
        appointment.paid === false
      ) {
        await AppointmentSchema.findOneAndDelete({ _id: appointment._id });
      }
    });
  }
};
//From the MUSE: https://github.com/hack4impact-utk/muse-website/blob/develop/utils/helpers/hours.ts
/**
 * Parses the hours from a string of hours.
 * @param hours The string of hours. (Ex: 12:00PM-4:00PM)
 * @returns an array containing the opening and closing hours as separate objects.
 */
const parseHours = (
  hours: string
): [
  opening: { hour: number; mins: number },
  closing: { hour: number; mins: number }
] => {
  //Split the opening and closing hours.
  const [a, b] = hours.split("-");
  //Separates the opening and closing hours into hh:mm and AM/PM so they can be parsed.
  const [openTime, openAMPM] = a.split(/(?=[aApP][mM])/);
  const [closingTime, closingAMPM] = b.split(/(?=[aApP][mM])/);

  //This splits opening and closing hours into hh and mm
  const [openingHours, openingMinutes] = openTime.split(":");
  const [closingHours, closingMinutes] = closingTime.split(":");

  const opening = {
    //This will be in 24-hour time for easy number comparision later.
    hour:
      parseInt(openingHours) +
      (openAMPM.toLowerCase() == "pm" && parseInt(openingHours) != 12 ? 12 : 0),
    mins: parseInt(openingMinutes),
  };
  const closing = {
    hour:
      parseInt(closingHours) +
      (closingAMPM.toLowerCase() == "pm" && parseInt(closingHours) != 12
        ? 12
        : 0),
    mins: parseInt(closingMinutes),
  };

  return [opening, closing];
};

/** Gets the hour pairs in a given business day based on the opening and closing hours of that day.
 * @param openingHour the opening hour of that business day.
 * @param closingHour the closing hour of that business day.
 * @returns a collection of strings to be used to display bookable hours and fetch appointments at those times.
 */

const getHourPairs = (openingHour: number, closingHour: number): string[] => {
  let hourDifference = closingHour - openingHour; //This number represents the number of pairs there should be.
  let hourIncrementor = 0;
  let hourCollection = [];
  let timeString = "";
  //Go through all the hours and generate an hour string.
  while (hourDifference != 0) {
    timeString = `${openingHour - 12 + hourIncrementor}:00PM-${
      closingHour - 12 - hourDifference + 1
    }:00PM`;

    hourCollection.push(timeString);
    hourIncrementor++;
    hourDifference--;
  }
  return hourCollection;
};
