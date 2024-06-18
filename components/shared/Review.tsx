"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const tempReviews = [
  {
    _id: 1,
    name: "Jane Cooper",
    natinality: "Iceland",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/crazy-man-funny-expression_1194-3132.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 2,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 3,
    name: "Floyd Miles",
    natinality: "Guinea",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-aside-confused_141793-28314.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 4,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
  {
    _id: 5,
    name: "Marvin McKinney",
    natinality: "Iran (Islamic Republic of)",
    stars: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/pookal.mp3",
  },
];

const Review = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10 ">
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Description of the image
        </h2>
        <p className="text-left text-[22px] font-light text-white sm:text-[32px]">
          What Our Clients Say
        </p>
        <Marquee pauseOnClick pauseOnHover >
          <div className="mt-10 flex">
            {tempReviews.map((item) => (
              <ReviewCard key={item._id} {...item} />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Review;
