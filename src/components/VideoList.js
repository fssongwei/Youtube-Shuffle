import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const videosList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });

  return (
    <div>
      <ul className="mdui-list">{videosList} </ul>
    </div>
  );
};

export default VideoList;
