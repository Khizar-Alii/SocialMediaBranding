import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "./SlideShow.css";
import 'react-slideshow-image/dist/styles.css'
import model1 from "../../../assests/model1.jpg";
import model2 from "../../../assests/model2.jpg";
import model3 from "../../../assests/model3.jpg";
import model4 from "../../../assests/model4.jpg";
import { useInView } from "react-intersection-observer";


const slideImages = [
  {
    img: model1,
    caption: "Slide 1",
    heading: "Signature Style",
    text: "Using the analysis of your color type, type of your figure, preferences and desires, we will develop your unique style, select a wardrobe, make-up, hairdo. Your outer appearance will be fully consistent with your inner vision of yourself.",
  },
  {
    img: model2,
    caption: "Slide 2",
    heading: "WILL BE ABLE TO CREATE A STUNNING CONTENT ON YOUR OWN",
    text: "Applying my method of working with content, you will gain unique knowledge of planning, filming content that becomes popular and trendy. Followers will save your photo as a nice idea for their moodboards. You will become a role model in your niche.",
  },
  {
    img: model3,
    caption: "Slide 3",
    heading: "YOUR OWN SUCCESSFUL PRODUCT",
    text: "From idea to a successful product - using my signature method we will create your powerful Product, Service or Project with an aesthetic and ideologically strong background",
  },
  {
    img: model4,
    caption: "Slide 4",
    heading: "NO MORE QUESTIONS - ONLY A CLEAR VISION OF YOUR SUCCESS",
    text: "From posts to stories, from colors to fonts, from locations to objects - after our cooperation, you will clearly know which colors are part of your brand identity and signature style, who and how you are selling your products to and how to be consistent with posting, style and behavior.",
  },
  {
    img: model2,
    caption: "Slide 5",
    heading: "FINDING YOUR TRUE DESIRES",
    text: "Full Personality Type Indication, work with the subconscious and hidden desires will allow us to choose exactly your strategy for promoting and building a Personal brand, and not copy other people's styles and behavior",
  },
  {
    img: model1,
    caption: "Slide 6",
    heading: "YOUR SIGNATURE STYLE IN EACH ACTION",
    text: "Signature image editing - you get a clear understanding of how to shoot and edit photos in your own signature way. No more 'chaos' and randomness. Order, style, a clear line of conduct.",
  },
];

const ImageSlideShow = () => {
    const [slideShowRef, slideShowRefInView] = useInView({
        triggerOnce: true,
        threshold: 0.1, 
      });
  return (
    <div ref={slideShowRef} className={`slide-container ${slideShowRefInView ? "slide-container-visible" : ""}`}>
      <Zoom
        scale={0.4}
        duration={5000}
        arrows={true}
        indicators={false}
        autoplay={true}
        dots = {true}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img
              style={{
                width: "60%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px auto",
                borderRadius: "20px",
              }}
              src={slideImage.img}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "10px",
                borderRadius: "5px",
                color:'#003300',
                letterSpacing:'1px',
              }}
            >
                <h3>{slideImage.heading}</h3>
              <p>{slideImage.text}</p>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlideShow;
