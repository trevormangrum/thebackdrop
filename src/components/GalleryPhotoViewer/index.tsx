import React from "react";
import { GalleryPhoto } from "utils/types";
interface Props {
  galleryPhoto: GalleryPhoto;
  setMainGalleryPhoto({}: GalleryPhoto): void;
}
const GalleryPhotoViewer: React.FC<Props> = ({
  galleryPhoto,
  setMainGalleryPhoto,
}) => {
  return (
    <div
      className={`gallery-photo-viewer ${
        galleryPhoto && galleryPhoto.photo != undefined ? "visible" : ""
      }`}
    >
      <div className="gallery-overlay"></div>
      <div className="gallery-photo-viewer-content">
        <div className="gallery-button-container">
          <button onClick={() => setMainGalleryPhoto({} as GalleryPhoto)}>
            X
          </button>
        </div>
        <img
          src={
            galleryPhoto && galleryPhoto.photo ? galleryPhoto.photo.url : "#"
          }
          alt={
            galleryPhoto && galleryPhoto.description
              ? galleryPhoto.description
              : ""
          }
        />
        <p>
          {galleryPhoto && galleryPhoto.description
            ? galleryPhoto.description
            : ""}
        </p>
      </div>
    </div>
  );
};

export default GalleryPhotoViewer;
