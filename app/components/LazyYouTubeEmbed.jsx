"use client";

import { useState } from "react";

export default function LazyYouTubeEmbed({ videoId, title, thumbnailAlt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`;

  return (
    <div className="video-lite">
      {isLoaded ? (
        <iframe
          src={embed}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          className="video-poster"
          type="button"
          aria-label={`Play video: ${title}`}
          onClick={() => setIsLoaded(true)}
        >
          <img src={thumbnail} alt={thumbnailAlt} loading="lazy" />
          <span className="video-play" aria-hidden="true">
            <span></span>
          </span>
        </button>
      )}
    </div>
  );
}
