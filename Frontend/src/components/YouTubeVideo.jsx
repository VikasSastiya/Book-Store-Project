import React from 'react';

function YouTubeVideo({ videoId }) {
  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;