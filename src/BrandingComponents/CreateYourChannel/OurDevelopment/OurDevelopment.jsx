import React from 'react'
import "../OurDevelopment/OurDevelopment.css"
import model1 from "../../../../assests/model1.jpg"
import cake from "../../../../assests/cake.webp"
import Button from "../../Button/Button.jsx"
const OurDevelopment = () => {
  return (
    <div className='ourDevelopment'>
      <div className="ourDevelopmentLeft">
        <img src={model1} alt="" />
      </div>
      <div className="ourDevelopmentRight">
        <h2>What will be exactly developed:</h2>
        <ul>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Defining the nature of your product</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Creation of the fundamentum of your product</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Name, Motto and Slogan</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Packages, Types and Pricing Policy, Visual Identity</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Product Sound</p>
                </div>
            </li>
            <Button title="Get a Free Consultation" />
        </ul>
      </div>
    </div>
  )
}

export default OurDevelopment
