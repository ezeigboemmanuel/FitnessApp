"use client";
import ExerciseDetail from "@/components/ExerciseDetail";
import Youtube from "@/components/Youtube";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "@/utility/fetchData";
import React, { useEffect, useState } from "react";

const ExercisePage = ({ params }: { params: { id: string } }) => {
  const [exerciseDetail, setexerciseDetail] = useState<ExerciseDetail>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
    instructions: [""],
  });

  const [youtubeDetail, setYoutubeDetail] = useState<YoutubeDetail[]>([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
        exerciseOptions
      );
      console.log("esxer", exerciseDetailData);
      setexerciseDetail(exerciseDetailData);

      const youtubeDetailData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      console.log("youtube", youtubeDetailData.contents);
      setYoutubeDetail(youtubeDetailData.contents);
    };
    fetchExercisesData();
  }, [params.id]);
  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <Youtube youtubeDetail={youtubeDetail} exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExercisePage;
