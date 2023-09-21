import Link from "next/link";
import React from "react";

type Props = {
  youtubeDetail: YoutubeDetail[];
  exerciseDetail: ExerciseDetail;
};
const Youtube = ({ youtubeDetail, exerciseDetail }: Props) => {
  return (
    <div>
      <p style={{textTransform: 'capitalize', fontSize: '25px', textAlign: 'center'}}><span style={{color: '#8358FF', fontSize: '25px', marginBottom: '15px'}}>{exerciseDetail.name}</span> videos</p>
      <div className="exercise-videos">
        {youtubeDetail?.slice(0, 6).map((item, index) => (
          <Link
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p>{item.video.title}</p>
              <p style={{color: '#4F4C4C', marginTop: '10px'}}>{item.video.channelName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
