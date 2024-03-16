import React from "react";
import "../BrandRoadMapPartnership/BrandRoadMapPartnership.css";
import partnership1 from "../../../../assests/partnership1.webp";
import partnership2 from "../../../../assests/partnership2.webp";
import partnership3 from "../../../../assests/partnership3.webp";
import partnership4 from "../../../../assests/partnership4.webp";
import partnership5 from "../../../../assests/partnership5.webp";
import cake from "../../../../assests/cake.webp";
import Button from "../../Button/Button.jsx";


const BrandRoadMapPartnership = () => {
  return (
    <div className="BrandRoadMapPartnership">
      <div className="BrandRoadMapPartnershipTop">
        After our partnership, you will have a clear <br /> structure,
        step-by-step road map and <br /> incredibly aesthetic documentation for{" "}
        <br /> internal & external use
      </div>
      <div className="BrandRoadMapPartnershipContainer">
        <div className="BrandRoadMapPartnershipContainerLeft">
            <img src={partnership1} alt="" />
            <img src={partnership2} alt="" />
            <div style={{display:"flex",flexDirection:"column",paddingLeft:"25px"}}>
            <img src={partnership3} alt="" />
            <img src={partnership4} alt="" />
            <img src={partnership5} alt="" />
            </div>
        </div>
        <div className="BrandRoadMapPartnershipContainerRight">
                <ul>
                    <li>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={cake} alt="" style={{padding:"10px 20px",borderRadius:"50%"}}/>
                            <p>We will conduct an audit of your current situation</p>
                        </div>
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={cake} alt="" style={{padding:"10px 20px",borderRadius:"50%"}}/>
                            <p>We will determine all your needs for both - internal and external use</p>
                        </div>
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={cake} alt="" style={{padding:"10px 20px",borderRadius:"50%"}}/>
                            <p>We will collect all the information and place it in an organized structure</p>
                        </div>
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={cake} alt="" style={{padding:"10px 20px",borderRadius:"50%"}}/>
                            <p>You will get a dully organized and designed files for internal and external usage</p>
                        </div>
                    </li>
                    <li>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={cake} alt="" style={{padding:"10px 20px",borderRadius:"50%"}}/>
                            <p>All the information will find its place. Processes become clear. Stages become smooth. Clients can easily find all the information their look for.</p>
                        </div>
                    </li>
                </ul>
        </div>
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  );
};

export default BrandRoadMapPartnership;
