import React from "react";
import "./Proposal.css";
import h3 from "../../../assests/h3.jpg";
import cakeImage from "../../../assests/cake.webp";
import { useInView } from "react-intersection-observer";

const Proposal = () => {
  const [proposalListContent, proposalListContentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageProposal, imageProposalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="proposal">
      <p className="proposal-title">
        What does it mean <span>TO WORK ONORA</span>
      </p>
      <div className="porposalContainer">
        <div className="proposalContainerLeft">
          <ul>
            <li
              ref={proposalListContent}
              className={`proposalListContent ${
                proposalListContentInView ? "proposalListContent-visible" : ""
              }`}
            >
              <img src={cakeImage} alt="" />
              <div>
                <span>WE WILL CREATE YOUR UNIQUE INSTAGRAM IMAGE</span>
                <p>The way you look, you think and you behave</p>
              </div>
            </li>
            <li
              ref={proposalListContent}
              className={`proposalListContent ${
                proposalListContentInView ? "proposalListContent-visible" : ""
              }`}
            >
              <img src={cakeImage} alt="" />

              <div>
                <span>I WILL SHOW YOU WHAT AN ENERGY OF SUCESS IS</span>
                <p>
                  iI work with your Energy, since without a high energy level no
                  one can become successful and lead people
                </p>
              </div>
            </li>
            <li
              ref={proposalListContent}
              className={`proposalListContent ${
                proposalListContentInView ? "proposalListContent-visible" : ""
              }`}
            >
              <img src={cakeImage} alt="" />

              <div>
                <span>WE WILL BUILD YOUR POWERFUL PERSONAL BRAND</span>
                <p>
                  With the strong positioning, visual identity and growth
                  strategy
                </p>
              </div>
            </li>
            <li
              ref={proposalListContent}
              className={`proposalListContent ${
                proposalListContentInView ? "proposalListContent-visible" : ""
              }`}
            >
              <img src={cakeImage} alt="" />

              <div>
                <span>WE TRANSFORM YOUR LIFESTYLE</span>
                <p>
                  through an audit of your current situation we determine your
                  Points of Growth and change your life in the way you start
                  being more inspired, energetic and capable of making better
                  results than ever
                </p>
              </div>
            </li>
            <li
              ref={proposalListContent}
              className={`proposalListContent ${
                proposalListContentInView ? "proposalListContent-visible" : ""
              }`}
            >
              <img src={cakeImage} alt="" />

              <div>
                <span>WE CREATE YOUR LEGENDARY PRODUCT</span>
                <p>
                  We look at your expertise, we study your target audience we
                  create a strong Product, that can increase your profit and
                  will allow you to become a role model for an entire market
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          ref={imageProposal}
          className={`proposalContainerRight ${
            imageProposalInView ? "proposalContainerRight-visible" : ""
          }`}
        >
          <img
            src="https://img.freepik.com/premium-photo/colorful-horse-statue-with-black-background_777078-37996.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Proposal;
