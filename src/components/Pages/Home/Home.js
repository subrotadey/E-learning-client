import React from "react";
import Banner from "./Banner";
import Characteristics from "./Characteristics/Characteristics";
import Counter from "./Counter/Counter";
import FeatureInfo from "./FeatureInfo/FeatureInfo";
import HomeCourses from "./HomeCourses/HomeCourses";
import Info from "./Info/Info";
import Testimonials from "./Testimonials/Testimonials";
import ConnectedSection from "./ConnectedSection/ConnectedSection";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <Info></Info>
      <Characteristics></Characteristics>
      <FeatureInfo></FeatureInfo>
      <HomeCourses></HomeCourses>
      <Counter></Counter>
      <Testimonials></Testimonials>
      <ConnectedSection/>
    </div>
  );
};

export default Home;
