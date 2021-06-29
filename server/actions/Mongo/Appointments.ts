import { Appointment } from "utils/types";
import constants from "utils/constants";
export const getTotalPeopleInHour = (day: Date) => {
  //TODO
};

export const createAppointment = (appInfo: Appointment) => {
  //TODO
};

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

  const [ opening, closing ] = parseHours(hours as string);
  return getHourPairs(opening.hour, closing.hour);
};

export const deleteAppointment = (appointment: Appointment) => {
  //TODO
};

export const checkForAvailability = () => {
  //TODO
};

export const updateAppointmentPaymentById = (id: string) => {};



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
  let hourDifference = closingHour - openingHour - 1; //This number represents the number of pairs there should be.
  let hourIncrementor = 0;
  let hourCollection = [];
  let timeString = "";
  while(hourDifference != 0) {
    timeString = `${openingHour - 12 + hourIncrementor}:00PM-${closingHour - 12 - hourDifference}:00PM`;

    hourCollection.push(timeString);
    hourIncrementor++;
    hourDifference--;
  
  }
  return hourCollection;
}
