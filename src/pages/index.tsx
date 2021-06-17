import React from "react";
import { NextPage } from "next";
import Button from "src/components/Button";
import Header from "src/components/Header";
const HomePage: NextPage = () => {
  return (
  <div>
    <Header />
    <Button href='/' text="view"/>
  </div>);
};

export default HomePage;
