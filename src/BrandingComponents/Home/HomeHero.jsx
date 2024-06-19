import React from "react";
import Button from "../Button/Button";
import "./Home.css";
import { useInView } from "react-intersection-observer";

import "animate.css";

const HomeHero = () => {
  const [homeContents, homeContentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="heroContainer">
      <div className="heroTop">
        <h1>FEYABLANCHE STUDIO</h1>
        <p>Branding · Content Creation · Online Projects Launcher</p>
      </div>

      <div ref={homeContents}
        className={`homeContents ${ homeContentsInView ? "homeContents-visible" : ""}`}>
        <span>
          Transform Your Ideas & Instagram Page into <h2>a Legendary Brand</h2>
        </span>
        <p className="specailP">
          Gorgeous Instagram, Powerful Personal Brand, and Legendary Product -
          Feyablanche is your all-in-one solution for monetizing your IG and
          becoming a role model for the whole market.
          Everything we create for you inevitably becomes aesthetically gorgeous
          and ideologically strong!
        </p>
        <span>
          <p
            style={{
              backgroundColor: "#9E8261",
              color: "black",
              marginBottom: "10px",
            }}
          >
            Get your Free Consultation Session with Feyablanche
          </p>
          to start your journey to success now!
        </span>
        <br />
        <Button title="Get a Free Consultation" />
      </div>
    </div>
  );
};

export default HomeHero;
