import React from 'react'
import "../Packages/Packages.css"

const Packages = () => {
  return (
    <div className='Packages'>
      <h2>Packages and Prices:</h2>
      <div className="packagesContainer">
        <div className="packagesContent">
            <h2>Gold</h2>
            <p>signature lessons with all my secrets for unforgettable stories <br />
            Scenarios for Lunch (Stories) with the most powerful triggers inclusive the analysis of your TA, needs, positioning and long-term strategy
            </p>
            <br />
            <span>Recommendations on How To SELL THROUGH TRANSFORMATION and not the information <br /> 1 month post-service guideline  <br />
            "Personal Audit quiz session" <br /> Defining the Product <br /> Customer Avatar Analysis <br /> Famous Personalized Session with Feyablanche - Product Creation <br /> Brand Book of your Product
            </span>
            <h3>749 $</h3>
        </div>
        <div className="packagesContent diamondContent">
            <h2>Diamond</h2>
            <p className='diamond'>signature lessons with all my secrets for unforgettable stories <br />
            Scenarios for Lunch (Stories) with the most powerful triggers inclusive the analysis of your TA, needs, positioning and long-term strategy
            </p>
            <br />
            <span>Recommendations on How To SELL THROUGH TRANSFORMATION and not the information <br /> 1 month post-service guideline  <br />
            "Personal Audit quiz session" <br /> Defining the Product <br /> Customer Avatar Analysis <br /> Famous Personalized Session with Feyablanche - Product Creation <br /> Brand Book of your Product
            </span>
            <h3>999 $</h3>
        </div>
        <div className="packagesContent silverContent">
            <h2>Silver</h2>
            <p className='silver'>signature lessons with all my secrets for unforgettable stories <br />
            Scenarios for Lunch (Stories) with the most powerful triggers inclusive the analysis of your TA, needs, positioning and long-term strategy
            Recommendations on How To SELL THROUGH TRANSFORMATION and not the information <br /> 1 month post-service guideline   
            </p>
            <br />
            <span>"Personal Audit quiz session" <br /> Defining the Product <br /> Customer Avatar Analysis <br /> Famous Personalized Session with Feyablanche - Product Creation <br /> Brand Book of your Product
            </span>
            <h3>499 $</h3>
        </div>
      </div>
    </div>
  )
}

export default Packages
