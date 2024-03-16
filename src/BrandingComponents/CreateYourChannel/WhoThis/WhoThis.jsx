import React from "react";
import "../WhoThis/WhoThis.css";
import whothis1 from "../../../../assests/whothis1.webp";
import whothis2 from "../../../../assests/whothis2.webp";
import whothis3 from "../../../../assests/whothis3.webp";
import whothis4 from "../../../../assests/whothis4.webp";
import Button from "../../Button/Button.jsx"
const WhoThis = () => {
  return (
    <div
      className="whoThis"
      style={{
        padding:"10px 0",
        backgroundColor: "#103959",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h3
        style={{
          fontSize: "25px",
          letterSpacing: "1px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Who is this for?
      </h3>
      <div
        className="whoThisContainer"
        style={{
          display: "flex",
          width:"auto"
        }}
      >
        <div className="whoThisLeft">
          <div className="whoThisLeftContents">
            <img src={whothis1} alt="" />
            <div>
              <h3>
                For those who want to higher a class of the product <br />{" "}
                (along with their income, of course)
              </h3>
              <p>
                We all know a rule of business success - a tweed suit <br />{" "}
                will be more expensive in a Chanel store than at a flea <br />{" "}
                market. I help my clients to create the high-class <br />{" "}
                product, which will allow them to position themselves <br /> on
                a market and increase their profits.
              </p>
            </div>
          </div>
          <div className="whoThisLeftContents">
            <img src={whothis2} alt="" />
            <div>
              <h3>
                For Instagram bloggers who want to start getting <br /> money
                from their Instagram
              </h3>
              <p>
                They already have loyal followers and Personal Brand <br />{" "}
                developed. They only problem is they don't have a clear <br />{" "}
                idea of what they will be able to sell and how to start <br />{" "}
                building a powerful brand with a stable income
              </p>
            </div>
          </div>
          <div className="whoThisLeftContents">
            <img src={whothis3} alt="" />
            <div>
              <h3>You are investing in a long-term strategy</h3>
              <p>
                You don't want to settle for less or mediocre. You want <br />
                your product to become a legend. Your product must <br /> become
                a role model for an entire market. So you are <br /> seeking for
                an expert assistant - from creating a <br /> philosophy, working
                with the target audience to making <br /> each Customer Touch
                Points incredibly aesthetic and <br /> remarkable.
              </p>
            </div>
          </div>
        </div>
        <div className="whoThisRight">
          <img src={whothis4} alt="" />
        </div>
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default WhoThis;
