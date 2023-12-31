"use client";
import React, { useState } from "react";
import bannerImage from "../assets/image/fitnessimg.jpg";
import Image from "next/image";
import Exercises from "./Exercises";
import { fetchData, exerciseOptions } from "../utility/fetchData";

type Props = {
  setExercises: (value: any) => void;
};
const Banner = ({ setExercises}: Props) => {
  const [search, setSearch] = useState<Exercises["name"]>("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log("exerData", exercisesData)
      const searchedExercises = exercisesData.filter(
        (exercise: Exercises) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log("searchExer",searchedExercises);
      setSearch("");
      
      setExercises(searchedExercises);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(search.length)
    setSearch(e.target.value.toLowerCase());
    console.log(search)
  };

  return (
    <div className="banner">
      <Image src={bannerImage} alt="banner-img" fill className="banner-img" />
      <div>
        <p className="banner-text">
          GET A HEALTHY BODY WITH THE PERFECT EXERCISES
        </p>
      </div>
      <div className="banner-search">
        <input
          type="text"
          className="banner-input"
          placeholder="Search Exercises..."
          onChange={handleChange}
        />
        <button className="banner-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
