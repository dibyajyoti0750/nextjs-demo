"use client";

import Image from "next/image";
import posthog from "posthog-js";

export default function ExploreBtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      onClick={() => {
        console.log("Click");
        posthog.capture("explore_events_clicked");
      }}
      className="mt-7 mx-auto"
    >
      <a href="#events">
        Exolore Events
        <Image
          src={"/icons/arrow-down.svg"}
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
}
