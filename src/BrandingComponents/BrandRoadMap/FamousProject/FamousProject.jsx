import React from "react";
import "../FamousProject/FamousProject.css";
import model1 from "../../../../assests/model1.jpg";
import model2 from "../../../../assests/model2.jpg";
import model3 from "../../../../assests/model3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../../Button/Button.jsx";
import ImageSlideShow from "../../SlideShow/Slide.jsx";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  //   arrows: true,
};
const FamousProject = () => {
  return (
    <div className="FamousProject">
      <h1>Famous projects</h1>
      <div className="FamousProjectContainer">
        <ImageSlideShow />
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default FamousProject;
