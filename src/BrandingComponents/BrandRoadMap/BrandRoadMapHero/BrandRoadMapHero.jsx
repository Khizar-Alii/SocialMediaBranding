import React from "react";
import "../BrandRoadMapHero/BrandRoadMapHero.css";
import Button from "../../Button/Button.jsx";
import BrandRoadMapService from "../brandRoadMapService/BrandRoadMapService.jsx";
import BrandRoadMapPartnership from "../BrandRoadMapPartnership/BrandRoadMapPartnership.jsx";
import FamousProject from "../FamousProject/FamousProject.jsx";

const BrandRoadMapHero = () => {
  return (
    <div className="brandRoadMapHero">
      <div className="brandRoadMapHeroMain" style={{ paddingBottom: "50px" }}>
        <div className="brandRoadMapHeroHeading">
          <h2>FEYABLANCHE</h2>
          <p>TOP-LEVEL BRAND CREATOR</p>
        </div>
        <div className="brandRoadMapHeroHeadingTop">
          <span>
            Stop living in the mess
            <p>with all your projects and services on IG!</p>
          </span>
          <p style={{ paddingTop: "50px" }}>
            Get duly designed and structured documentation for <br /> yourself,
            team and clients, understand your services <br /> and feel more
            comfortable and confident.
          </p>
        </div>
        <Button title="Get a Free Consultation" />
      </div>
      <div className="brandRoadMapHeroComponents">
        <BrandRoadMapService />
        <BrandRoadMapPartnership />
        <FamousProject />
      </div>
    </div>
  );
};

export default BrandRoadMapHero;
