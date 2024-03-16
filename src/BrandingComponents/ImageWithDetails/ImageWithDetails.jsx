import React from "react";
import kid1 from "../../../assests/kid1.jpg";
import kid2 from "../../../assests/kid2.jpg";
import cake from "../../../assests/cake.webp";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";

import "../ImageWithDetails/ImageWithDetails.css";

const ImageWithDetails = () => {
  const [ImageWithDetailsLeftContainer, ImageWithDetailsLeftContainerInView] =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  const [ImageWithDetailsRightContainer, ImageWithDetailsRightContainerInView] =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <div className="ImageWithDetails">
      <div className="ImageWithDetailsContainer">
        <div
          ref={ImageWithDetailsLeftContainer}
          className={`ImageWithDetailsContainerLeft ${
            ImageWithDetailsLeftContainerInView
              ? "ImageWithDetailsContainerLeft-visible"
              : ""
          }`}
        >
          <img
            src={kid1}
            alt=""
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
          <h3 className="ImageWithDetailsHeading" style={{color:'#F1F1F1',fontWeight:"800"}}>What you experience now?</h3>
          <ul style={{ paddingTop: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                You look at successful bloggers, at their collaborations with
                brands, hotels and
                <strong> cannot understand how they did it </strong>
              </li>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                You have a
                <strong>lack of understanding of what needs to be done,</strong>
                where to start, in order to become more popular on Instagram
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong>
                  Current employment does not correspond to your talent or
                  desired life
                </strong>
                (talent is not realized, there is no feeling of fullness and
                joy)
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong>
                  Uncomfortable conditions for obtaining finance at the moment
                </strong>
                (you might not like the current work, schedule, location, lack
                of prospects)
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                There is <strong> no aesthetics of life </strong> and you don't
                know how to make yourself and the space around you beautiful &
                ejoyable
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong> Desire to be free </strong> (travel more, work from
                anywhere in the world)
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong> No knowledge of working with content, </strong>
                followers, how and what to shoot, how to edit
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong> Polarity of desires </strong> (I want tenderness and
                audacity, white and black, silk and latex, I can't decide on a
                product, style, etc.)
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ mixBlendMode: "color-burn", width: "10%" }}
              />
              <li>
                <strong> Lack of understanding of your personality </strong>
                (due to the abundance of content, options for life scenarios, I
                can no longer clearly define either what I really want or who I
                am)
              </li>
            </div>
            <br />
          </ul>
        </div>
        <div
          ref={ImageWithDetailsRightContainer}
          className={`ImageWithDetailsContainerRight ${
            ImageWithDetailsRightContainerInView
              ? "ImageWithDetailsContainerRight-visible"
              : ""
          }`}
        >
          <img
            src={kid2}
            alt=""
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
          <h3 className="ImageWithDetailsHeading" style={{color:'#9E8261',fontWeight:"800"}}>
            How will your life change?
          </h3>
          <ul style={{ paddingTop: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                <strong>
                  You know the secrets of successful bloggers and the work of
                  Instagram:
                </strong>
                - you finally understand what you need to do to shoot beautiful
                and trendy content for yourselfwhat to talk about, what to
                write, how to edit and how to behave
              </li>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                <strong>
                  You have your signature style that suits you both externally
                  and internally
                </strong>
                - you know colors, clothing styles that work on your goals and
                help you to create a unique social media content
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                <strong> You have a clear plan </strong> of what and how you
                should do in order to gain financial and personal freedom. You
                know what to post, how to behave and who is your target audience
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                <strong> You inspire others, you are a role model</strong>.
                Followers save your posts and photos, they love your life, the
                way you look, your courage to create the life you deserve
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                You clearly understand how and what you should do to
                <strong> build the brand of your dreams.</strong> Now you know
                how to achieve your goals. The main thing is to keep going
                without stopping!
              </li>
            </div>
            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cake}
                alt=""
                style={{ width: "10%", mixBlendMode: "darken" }}
              />
              <li>
                <strong>You live in an incredibly aesthetic space </strong> that
                inspires you, allows you to create and enjoy this life.
              </li>
            </div>
            <br />
          </ul>
        </div>
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default ImageWithDetails;
