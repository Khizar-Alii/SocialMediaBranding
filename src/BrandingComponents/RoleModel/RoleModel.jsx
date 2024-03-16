import React from "react";
import "../RoleModel/RoleModel.css";
import kid1 from "../../../assests/kid1.jpg";
import RoleModelPic from "../../../assests/roleModel.webp";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";

const RoleModel = () => {
  const [RoleModel, RoleModelInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={RoleModel}
      className={`roleModel ${RoleModelInView ? "roleModel-visible" : ""}`}
    >
      <h2 className="roleModelHeading">
        Becoming a Role Model for a whole <br /> market: how it happens?
      </h2>
      <div className="roleModelContainer">
        <div className="roleModelContainerleft">
          <img src={kid1} alt="" />
          <h3>
            NEW LIFESTYLE & <br /> POWERFUL LIFE STRATEGY
          </h3>
          <p>
            Bright, stylish, unforgettable! Through analyzing your color type,
            body shape, work with your preferences and final goal we will
            determine your signature style.
          </p>
        </div>
        <div className="roleModelContainermiddle">
          <img src={RoleModelPic} alt="" />
        </div>
        <div className="roleModelContainerright">
          <h3>CREATION OF A BRAND</h3>
          <p>
            Together we will define your product and build a powerful Personal
            Brand with a strong positioning, philosophy and mission. Also, you
            will get a clear Instagram strategy - what to talk about, how to
            take photos, what to show - all the answers you've been aiming for!
          </p>
          <img src={kid1} alt="" />
        </div>
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default RoleModel;
