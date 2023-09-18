import React from 'react'

type Props = {
  bodyPart: String;
}

const BodyPart = ({bodyPart}: Props) => {
  return (
    <div className="bodypart-card">
      <div className="bodypart-icon">icon</div>
      <div className='bodypart-card-text'>
        <p>{bodyPart}</p>
      </div>
    </div>
  )
}

export default BodyPart 