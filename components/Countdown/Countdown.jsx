"use client";

import React, { useState, useEffect } from "react";

const PromoCountdown = () => {
  // Set the target date to December 7, 2024 (Ghana Election Day)
  const targetDate = new Date("2024-12-07T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center p-4 bg-black/10 min-h-[50vh] rounded-md mb-10">
      <div className="space-y-5 mt-[5rem]">
        <div className="">
          <h1 className="text-3xl capitalize">Ghanaian Elections Countdown</h1>
        </div>
        <p className="lg:px-[10rem] text-black/60">
          The future of Ghana is in your hands. Every vote counts!
        </p>
      </div>
      <div className="text-2xl flex items-center justify-center mt-10">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>The election day has arrived!</span>
        )}
      </div>

      <div className="mt-10">
        <p className="text-white w-full lg:w-1/5 bg-blue-500 p-4 rounded-md">
          Be the change you want to see. Vote wisely for the future of Ghana!
        </p>
      </div>
    </div>
  );
};

export default PromoCountdown;
