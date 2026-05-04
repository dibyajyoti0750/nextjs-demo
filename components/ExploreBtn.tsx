"use client";

import Image from "next/image";

export default function ExploreBtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      onClick={() => console.log("Click")}
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
