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
        <p className="exercise-detail-description">
          Experience the revitalizing power of the <span className="exercise-detail-span">{exerciseDetail.name}</span> exercise, a dynamic and
          effective workout that targets <span className="exercise-detail-span">{exerciseDetail.target}</span> muscle groups for a full-body
          transformation. Whether you're a beginner or a seasoned fitness
          enthusiast, this versatile exercise can be tailored to your fitness
          level, helping you achieve your strength and flexibility goals with
          each repetition. Incorporate the <span className="exercise-detail-span">{exerciseDetail.name}</span> exercise into your routine for a
          balanced and invigorating fitness experience.
        </p>
      </div>
    </div>
  );
};

export default ExerciseDetail;
