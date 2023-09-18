"use client";
import React, { useState, useEffect } from "react";
import BodyPart from "./BodyPart";
import { exerciseOptions, fetchData } from "../utility/fetchData";

const Exercises = () => {
  const [bodyParts, setBodyParts] = useState<Exercises["bodyParts"]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  return (
    <div className="exercises-wrapper">
      <p className="exercise-text">Different BodyParts, Different Exercises</p>
      <div className="exercise-bodypart">
        {bodyParts.map((bodyPart) => (
          <BodyPart bodyPart={bodyPart} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
