import React from 'react'
import "../WorkStages/WorkStage.css"

const WorkStageStage = ({stage,desc,img}) => {
  return (
    <div className='workStageStage'>
      <div className="workStageStageContainer">
        <div className="workStageStageContainerContents">
            <h2>{stage}</h2>
            <p>{desc}  </p>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default WorkStageStage
