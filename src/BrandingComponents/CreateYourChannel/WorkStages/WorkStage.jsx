import React from "react";
import "../WorkStages/WorkStage.css";
import WorkStageStage from "./WorkStageStage";
import workStage1 from "../../../../assests/workStage1.webp";
import workStage2 from "../../../../assests/workStage2.webp";
import workStage3 from "../../../../assests/workStage3.webp";
import workStage4 from "../../../../assests/workStage4.webp";
import workStage5 from "../../../../assests/workStage5.webp";
import workStage6 from "../../../../assests/workStage6.webp";
import Button from "../../Button/Button.jsx"

const WorkStage = () => {
  return (
    <div className="workStage" style={{padding:"50px 0 10px 0"}}>
      <h3 style={{ textAlign: "center" }}>
        Our work will be divided into 5 stages:
      </h3>
      <div
        className="workStages"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}
      >
        <WorkStageStage
          stage="Stage I"
          desc={`Filling out the questionnaire`}
          img={workStage1}
        />
        <WorkStageStage
          stage="Stage II"
          desc={`Defining the Product`}
          img={workStage2}
        />
        <WorkStageStage
          stage="Stage III"
          desc={`Customer Avatar Analysis`}
          img={workStage3}
        />
        <WorkStageStage
          stage="Stage IV"
          desc={`Famous Personalized session`}
          img={workStage4}
        />
        <WorkStageStage
          stage="Stage V"
          desc={`Brand Book of your Product`}
          img={workStage5}
        />
        <WorkStageStage
          stage="Stage VI (Bonus)"
          desc={`1 month post-service guideline`}
          img={workStage6}
        />
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default WorkStage;
