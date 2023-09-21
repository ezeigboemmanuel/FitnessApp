import Image from "next/image";
import React from "react";

type Props = {
  exerciseDetail: ExerciseDetail;
};

const ExerciseDetail = ({ exerciseDetail }: Props) => {
  return (
    <div className="exercise-detail">
      <Image
        src={exerciseDetail.gifUrl}
        alt={exerciseDetail.name}
        width={729}
        height={742}
        className="exercise-detail-img"
      />
      <div className="exercise-detail-text">
        <p className="exercise-detail-name">{exerciseDetail.name}</p>
        <p style={{textDecoration: 'underline'}}>Instruction</p>
        <p className="exercise-detail-description">
          {exerciseDetail.instructions}
        </p>
      </div>
    </div>
  );
};

export default ExerciseDetail;
