import React from "react";

const VideoItem = ({
  video,
  onVideoSelected,
  selected,
  index,
  onVideoItemClick,
}) => {
  //   console.log(video);

  const isActiveClass = selected ? "mdui-list-item-active" : "";

  return (
    <li
      className={`mdui-list-item mdui-ripple ${isActiveClass}`}
      onClick={() => {
        onVideoSelected(video);
        onVideoItemClick(index);
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
