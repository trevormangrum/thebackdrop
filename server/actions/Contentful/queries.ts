import { gql } from "@apollo/client";

export default {
  gallery: {
    getGalleryImages: gql`
      query getGalleryImages {
        galleryPhotoCollection {
          items {
            photo {
              url
            }
            description
          }
        }
      }
    `,
  },
};
