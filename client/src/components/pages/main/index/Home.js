import React from "react";
import Customer from "./Customer";
import Hero from "./Hero";
import SeparatorBtm from "../../parts/separators/SeparatorBtm";
import SeparatorMid from "../../parts/separators/SeparatorMid";
import ContentOne from "../../parts/content/ContentOne";
import ContentTwo from "../../parts/content/ContentTwo";

const Home = ({data, loading}) => {
  return (
    <>
      <Hero />
      <ContentOne />
      <SeparatorMid />
      <ContentTwo />
      <SeparatorBtm />
      <Customer data={data} loading={loading}/>
    </>
  );
};

export default Home;
