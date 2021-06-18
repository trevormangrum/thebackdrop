import React from "react";
import { NextPage } from "next";
import Button from "src/components/Button";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import InitialView from "src/components/InitialView";
const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <InitialView />
      <Footer />
    </div>
  );
};

export default HomePage;
