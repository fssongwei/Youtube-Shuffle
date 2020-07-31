import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> loading </div>;
  } else {
    return (
      <div className="mdui-card" height="100%">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allowFullScreen=""
          width="100%"
          height="500px"
        ></iframe>
        <div className="mdui-card-primary">
          <div className="mdui-card-primary-title">{video.snippet.title}</div>
          <div className="mdui-card-primary-subtitle">
            {video.snippet.description}
          </div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
