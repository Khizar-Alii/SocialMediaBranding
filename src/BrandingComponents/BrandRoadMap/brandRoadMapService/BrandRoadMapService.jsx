import React from "react";
import "../brandRoadMapService/brandRoadMapService.css";
import cake from "../../../../assests/cake.webp";
import model from "../../../../assests/model1.jpg";
import Button from "../../Button/Button.jsx";

const brandRoadMapService = () => {
  return (
    <div className="brandRoadMapService" style={{paddingBottom:"20px"}}>
      <div className="brandRoadMapServiceLeft">
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "1px",
            fontWeight: "bold",
            padding: "20px 0",
          }}
        >
          This service is for you if...
        </h1>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={cake}
                alt=""
                style={{ padding: "0 20px", borderRadius: "50%" }}
              />
              <p>
                All the information about your product | service is in multiple
                places
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={cake}
                alt=""
                style={{ padding: "0 20px", borderRadius: "50%" }}
              />
              <p>
                All the information about your product | service is in multiple
                places
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={cake}
                alt=""
                style={{ padding: "0 20px", borderRadius: "50%" }}
              />
              <p>
                All the information about your product | service is in multiple
                places
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={cake}
                alt=""
                style={{ padding: "0 20px", borderRadius: "50%" }}
              />
              <p>
                All the information about your product | service is in multiple
                places
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={cake}
                alt=""
                style={{ padding: "0 20px", borderRadius: "50%" }}
              />
              <p>
                All the information about your product | service is in multiple
                places
              </p>
            </div>
          </li>
      <Button title="Get a Free Consultation" />
        </ul>
      </div>
      <div className="brandRoadMapServiceRight">
        <img src={model} alt="" />
      </div>
    </div>
  );
};

export default brandRoadMapService;
