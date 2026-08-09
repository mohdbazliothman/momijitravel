"use client";

import Image from "next/image";
import { useRef } from "react";

const malaysiaDiscoveryImages = [
  {
    src: "/images/international/discovery/malaysia-discovery-01.png",
    alt: "Traveller holding a pink umbrella beneath glowing lanterns in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-02.png",
    alt: "Petronas Twin Towers illuminated at night in Kuala Lumpur",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-03.png",
    alt: "Boat crossing turquoise island waters in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-04.png",
    alt: "Traditional Malaysian cultural dancers performing outdoors",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-05.png",
    alt: "Sunrise over tea plantations in the Malaysian highlands",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-06.png",
    alt: "Aerial view of Putra Mosque beside the lake in Putrajaya",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-07.png",
    alt: "Clear tropical beach and turquoise sea in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-08.png",
    alt: "Visitor overlooking Kek Lok Si Temple in Penang",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-09.png",
    alt: "Rainforest waterfall flowing through rocks in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-10.png",
    alt: "Snorkellers swimming near a rocky tropical coast",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-11.png",
    alt: "Traveller looking across a golden paddy field in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-12.png",
    alt: "Merdeka 118 tower rising above Kuala Lumpur at sunset",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-13.png",
    alt: "Clear kayak floating on shallow turquoise water in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-14.png",
    alt: "Misty morning light over green highland tea fields",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-15.png",
    alt: "Traveller standing beside a rainforest stream in Malaysia",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-16.png",
    alt: "Reflection at Putra Mosque courtyard in Putrajaya",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-17.png",
    alt: "Sea turtle swimming over coral in clear Malaysian waters",
  },
  {
    src: "/images/international/discovery/malaysia-discovery-18.png",
    alt: "Quiet road between limestone hills in rural Malaysia",
  },
];

export default function MalaysiaDiscoveryGallery() {
  const trackRef = useRef(null);

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollGallery = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: track.clientWidth * 0.82 * direction,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const scrollToWhyMalaysia = (event) => {
    const section = document.getElementById("why-malaysia");
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    window.history.pushState(null, "", "#why-malaysia");
  };

  return (
    <section className="section malaysia-discovery" aria-labelledby="malaysia-discovery-title">
      <div className="container malaysia-discovery-header reveal">
        <span className="eyebrow">EXPLORE MALAYSIA</span>
        <h2 id="malaysia-discovery-title">Malaysia, More Than You Imagined</h2>
        <p>
          A journey through living heritage, tropical landscapes, vibrant cities
          and unforgettable experiences.
        </p>
      </div>

      <div className="malaysia-discovery-shell reveal">
        <button
          className="malaysia-discovery-arrow malaysia-discovery-prev"
          type="button"
          aria-label="Scroll Malaysia gallery backward"
          onClick={() => scrollGallery(-1)}
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div
          className="malaysia-discovery-track"
          ref={trackRef}
          role="list"
          tabIndex={0}
          aria-label="Malaysia visual discovery gallery"
        >
          {malaysiaDiscoveryImages.map((image) => (
            <figure className="malaysia-discovery-card" role="listitem" key={image.src}>
              <Image
                className="malaysia-discovery-image"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 78vw, (max-width: 1023px) 42vw, 24vw"
              />
            </figure>
          ))}
        </div>

        <button
          className="malaysia-discovery-arrow malaysia-discovery-next"
          type="button"
          aria-label="Scroll Malaysia gallery forward"
          onClick={() => scrollGallery(1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="container malaysia-discovery-footer reveal">
        <a className="malaysia-discovery-cue" href="#why-malaysia" onClick={scrollToWhyMalaysia}>
          Discover what makes Malaysia extraordinary ↓
        </a>
      </div>
    </section>
  );
}
