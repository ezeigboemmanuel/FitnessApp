"use client";
import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utility/fetchData";

type Props = {
  setBodyPart: (value: string) => void;
  bodyPart: string;
};

const Exercises = ({ setBodyPart, bodyPart }: Props) => {
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
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {bodyParts.map((item) => (
            <p onClick={() => setBodyPart(item)}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
