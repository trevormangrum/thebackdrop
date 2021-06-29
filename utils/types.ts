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
  _id?: string;
  groupName?: string;
  day?: string;
  time?: string;
  groupSize?: number;
  timeBooked?: Date;
  paid?: boolean;
}
