import React from "react";
import { Link } from "react-router-dom";

const HeadlineCards = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* CARDS */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Breakfast
            </p>
            <p className="px-2">We deliver breakfast</p>
            <Link to={'/menu'}>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button></Link>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
            alt=""
          />
        </div>
        {/* CARDS */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Lunch
            </p>
            <p className="px-2">We deliver lunch</p>
            <Link to={'/menu'}>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button></Link>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
            alt=""
          />
        </div>
        {/* CARDS */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Dinner
            </p>
            <p className="px-2">We deliver dinner</p>
            <Link to={'/menu'}>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button></Link>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/13183178/pexels-photo-13183178.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeadlineCards;
