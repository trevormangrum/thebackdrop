import { NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";
import { useQuery } from "@apollo/client";
import queries from "server/actions/Contentful/queries";
import { client } from "server/actions/Contentful";
import { GalleryPhoto, GalleryPhotoQueryResponse } from "utils/types";
import GalleryPhotoViewer from "src/components/GalleryPhotoViewer";
const GalleryPage: NextPage = () => {
  const [page, setPage] = React.useState(0);
  const [mainGalleryPhoto, setMainGalleryPhoto] = React.useState(
    {} as GalleryPhoto
  );

  const { data, loading, error } = useQuery<GalleryPhotoQueryResponse>(
    queries.gallery.getGalleryImages,
    {
      client: client,
    }
  );

  //Set up the gallery page to be paginated
  let entries: GalleryPhoto[][] = [];
  let tmp: GalleryPhoto[] = [];
  if (data) {
    for (let i = 0; i < data.galleryPhotoCollection.items.length; i++) {
      //9 items per page
      if ((i + 1) % 10 === 0) {
        entries.push(tmp);
        tmp = [data.galleryPhotoCollection.items[i]];
      } else {
        tmp.push(data.galleryPhotoCollection.items[i]);
      }
    }
    if (tmp.length > 0) entries.push(tmp);
  }

  React.useEffect(() => {
    if (mainGalleryPhoto && mainGalleryPhoto.photo != undefined) {
      window.scroll(0,0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "overlay";
    }
  }, [mainGalleryPhoto]);
  return (
    <Layout hero={true} heroText="Gallery">
      <section className="layout-wrapper">
        {data && !loading && (
          <>
            <GalleryPhotoViewer
              galleryPhoto={mainGalleryPhoto}
              setMainGalleryPhoto={setMainGalleryPhoto}
            />
            <div>
              <p className="page-results">
                {" "}
                Showing results {page * 9 + 1} -{" "}
                {entries && entries[page] && entries[page].length + page * 9} of{" "}
                {data.galleryPhotoCollection.items.length}
              </p>
              <div className="gallery-grid">
                {/* Photo Grid */}
                {entries &&
                  entries.length > 0 &&
                  entries[page].map((galleryPhoto) => {
                    return (
                      <img
                        onClick={() => setMainGalleryPhoto(galleryPhoto)}
                        className="gallery-photo"
                        key={galleryPhoto.description}
                        src={galleryPhoto.photo.url}
                      />
                    );
                  })}
              </div>
              <div className="pages">
                {entries.map((n, i) => (
                  <a
                    key={i}
                    className={page === i ? "active" : ""}
                    onClick={() => setPage(i)}
                  >
                    {i + 1}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default GalleryPage;
