import React from "react";

const VideoItem = ({ video, onVideoSelected }) => {
  console.log(video);
  return (
    <li
      className="mdui-list-item mdui-ripple"
      onClick={() => {
        onVideoSelected(video);
      }}
    >
      <div className="mdui-list-item-content">
        <img
          style={{ width: "168px", marginRight: "10px" }}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="mdui-list-item-content">{video.snippet.title}</div>
    </li>
  );
};

export default VideoItem;
