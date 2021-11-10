import React from "react";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Welcome from "../Welcome/Welcome";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>

      <WhyUs></WhyUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
