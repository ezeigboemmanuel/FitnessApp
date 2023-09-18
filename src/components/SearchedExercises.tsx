import React from "react";
import ExerciseCard from "./ExerciseCard";

type Props = {
  exercises: Exercises[];
};

const SearchedExercises = ({ exercises }: Props) => {
  return (
    <div className="search-container">
      {exercises.length >= 1 && <p className="search-text">Search Results</p>}
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
