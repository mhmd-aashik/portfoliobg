"use client";
import Image from "next/image";
import React from "react";
import "react-h5-audio-player/lib/styles.css";



interface Props {
  _id: number;
  name: string;
  natinality: string;
  stars: string;
  review: string;
  img: string;
  audio: string;
}

const ReviewCard = ({
  _id,
  name,
  natinality,
  stars,
  review,
  img,
  audio,
}: Props) => {
  return (
    <div className="mx-auto my-4 ml-5 max-w-sm gap-5 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5">
      <div className="flex flex-col gap-5 rounded-lg bg-[#020000] p-5 ">
        <div className="flex gap-10 ">
          <Image
            src={img}
            alt={name}
            width={200}
            height={200}
            className="size-20 rounded-full object-cover outline outline-1 outline-red-500"
          />
          <div>
            <p className="text-white">{name}</p>
            <p className="line-clamp-1 font-bold text-gray-700">{natinality}</p>
            <p>{stars}</p>
          </div>
        </div>
        <div>
          <p className="text-white">{review}</p>
          <audio controls className="mt-5">
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
