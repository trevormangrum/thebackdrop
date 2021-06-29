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
  groupName?: string;
  day?: Date;
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
