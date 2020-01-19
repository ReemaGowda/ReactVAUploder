import React from "react";

// Rendering individual videos
const Video = ({ video }) => {
  return (
    <div className="file-item">
      <video alt={`video - ${video.id}`} className="video" autoPlay>
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
};

// VideoList Component
const VideoDrop = ({ videos }) => {
  // render each video by calling video component
  const renderVideo = (video, index) => {
    return <Video video={video} key={`${video.id}-video`} />;
  };

  // Return the list of files
  return <section className="file-list">{videos.map(renderVideo)}</section>;
};

export default VideoDrop;
