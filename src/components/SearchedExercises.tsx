"use client";
import React, { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import ExerciseDetail from "./ExerciseDetail";
import { exerciseOptions, fetchData } from "@/utility/fetchData";

type Props = {
  exercises: Exercises[];
  bodyPart: string;
  setExercises: (value: any) => void;
};

const SearchedExercises = ({ exercises, bodyPart, setExercises }: Props) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      console.log(bodyPart)
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      }else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData)
      console.log(exercisesData)
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <div className="search-container">
      {exercises.length >= 1 && <p className="search-text">{bodyPart} Exercises Results</p>}
      {exercises.length >= 1 ? (
        <div className="searched-exercises">
          {exercises.map((exercise) => (
            <ExerciseCard exercise={exercise} />
          ))}
        </div>
      ) : (
        <p className="search-text">
          Ooops! No Exercises Found, try another search term
        </p>
      )}
    </div>
  );
};

export default SearchedExercises;
