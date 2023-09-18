"use client";
import ExerciseDetail from "@/components/ExerciseDetail";
import { exerciseOptions, fetchData } from "@/utility/fetchData";
import React, { useEffect, useState } from "react";

const ExercisePage = ({ params }: { params: { id: string } }) => {
  const [exerciseDetail, setexerciseDetail] = useState<ExerciseDetail>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
  });
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
        exerciseOptions
      );
      console.log(exerciseDetailData);
      setexerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [params.id]);
  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExercisePage;
