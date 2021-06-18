import React from "react";
import { NextPage } from "next";
import Button from "src/components/Button";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <Button href="/" text="view" />
      <Footer />
    </div>
  );
};

export default HomePage;
