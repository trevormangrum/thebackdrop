import { NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";

const GalleryPage: NextPage = () => {
  return (
    <Layout hero={true} heroText="Gallery">
      <section className="layout-wrapper"></section>
    </Layout>
  );
};

export default GalleryPage;
