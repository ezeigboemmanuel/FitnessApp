"use client";
import { useState } from "react";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises";

import "./styles.css";
import SearchedExercises from "../components/SearchedExercises";

export default function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(exercises);
  return (
    <main className="main">
      <Banner setExercises={setExercises} />
      <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} />

      <SearchedExercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </main>
  );
}
