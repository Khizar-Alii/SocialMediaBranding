import React from "react";
import "./Home.css";
import "animate.css";
import { useInView } from "react-intersection-observer";
import Button from "../Button/Button";
import AllYouNeed from "../AllYouNeed/AllYouNeed";
import Proposal from "../Proposal/Proposal";
import ChooseRequest from "../ChooseRequest/ChooseRequest";
import SlideShow from "../SlideShow/SlideShow";
import ImageWithDetails from "../ImageWithDetails/ImageWithDetails";
import RoleModel from "../RoleModel/RoleModel";
import { Parallax } from "react-parallax";
import background from "../../../assests/background2.jpg";
// #c48f7f

// <Parallax strength={200} bgImage="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
// <div className="content">
//   <div className="text-content">Normal Parallax</div>
// </div>
// </Parallax>
// <Parallax strength={-200} bgImage="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
// <div className="content">
//   <div className="text-content">Reverse Parallax</div>
// </div>
// </Parallax>
// <Parallax strength={200} bgImage="https://images.unsplash.com/photo-1709423377993-1a4d150e918c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" blur={{min:-5,max:15}}>
// <div className="content">
//   <div className="text-content">Blur Parallax</div>
// </div>
// </Parallax>
export const Home = () => {
  const [homeContents, homeContentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="home">
      <h1 className="topTitle">FEYABLANCHE STUDIO</h1>
      <p className="topSubTitle">
        Branding · Content Creation · Online Projects Launcher
      </p>
      <div
        ref={homeContents}
        className={`homeContents ${
          homeContentsInView ? "homeContents-visible" : ""
        }`}
      >
        <span>
          Transform Your Ideas & Instagram Page into <h2>a Legendary Brand</h2>
        </span>
        <br />
        <br />
        <br />
        <br />
        <p>
          Gorgeous Instagram, Powerful Personal Brand, and Legendary Product -
          Feyablanche is your all-in-one solution for monetizing your IG and
          becoming a role model for the whole market.
        </p>
        <br />
        <br />
        <p>
          Everything we create for you inevitably becomes aesthetically gorgeous
          and ideologically strong!
        </p>
        <br />
        <span>
          <p
            style={{
              backgroundColor: "#9E8261",
              color: "black",
              marginBottom: "10px",
            }}
          >
            Get your Free Consultation Session with Feyablanche
          </p>{" "}
          to start your journey to success now!
        </span>
        <br />
        <br />
        <Button title="Get a Free Consultation" />
      </div>

      <AllYouNeed />
      <Proposal />
      <ChooseRequest />
      <SlideShow />
      <ImageWithDetails />
      <RoleModel />
    </div>
  );
};
