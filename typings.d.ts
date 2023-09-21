interface Exercises {
  bodyParts: string[];
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}


interface ExerciseDetail {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  instructions: string[];
}

type YoutubeDetail = {
  video: Video;
};

interface Video {
  channelId: string;
  channelName: string;
  description: string;
  lengthText: string;
  publishedTimeText: string;
  title: string;
  videoId: string;
  viewCountText: string;
  thumbnails: Thumbnails[];
}

interface Thumbnails {
  height: number;
  url: string;
  width: number;
}
