import React from "react";
import "./Home.css";
import "animate.css";
import AllYouNeed from "../AllYouNeed/AllYouNeed";
import Proposal from "../Proposal/Proposal";
import ChooseRequest from "../ChooseRequest/ChooseRequest";
import SlideShow from "../SlideShow/SlideShow";
import ImageWithDetails from "../ImageWithDetails/ImageWithDetails";
import RoleModel from "../RoleModel/RoleModel";
import HomeHero from "./HomeHero"
export const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <AllYouNeed />
      <Proposal />
      <ChooseRequest />
      <SlideShow />
      {/* <ImageWithDetails /> */}
      <RoleModel />
    </div>
  );
};
