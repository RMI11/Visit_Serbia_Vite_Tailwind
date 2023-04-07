import React from "react";
import {
  Banner,
  Header,
  Regions,
  Seasons,
  Popular,
} from "../components";
import Quiz from "../components/Quiz";

const Home = () => {

  return (
    <>
      <Header />
      <Seasons />
      <Popular />
      <Regions />
      <Quiz />
      <Banner/>
    </>
  );
};

export default Home;
