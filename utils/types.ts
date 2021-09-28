import {ObjectID} from "mongodb";
export interface GalleryPhoto {
  photo: {
    url: string;
  };
  description: string;
}

export interface GalleryPhotoQueryResponse {
  __typename: string;
  galleryPhotoCollection: {
    items: GalleryPhoto[];
  };
}

export interface IDate {
  date?: Date | null;
  getDate: (value: Date) => void;
}

export interface Appointment {
  phone?: string;
  day?: string;
  time?: string;
  groupSize?: number;
  timeBooked?: Date;
  paid?: boolean;
}

export interface BookableHour {
  hourPair: string;
  remainingGroupSize: number;
  bookable: boolean;
}

export interface User {
  username: string;
  password: string;
}
