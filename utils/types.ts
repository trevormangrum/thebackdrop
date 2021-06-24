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
