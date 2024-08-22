import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  let dataWorkExperience = [
    {
      id: 1,
      title: "Backend Engineer",
      desc: "Developed and designed the backend for a notification system and community hub.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
  ];

  try {
    const { workExperience } = require("@/config/index");
    dataWorkExperience = workExperience || dataWorkExperience;
  } catch (error) {
    console.error("Failed to load from index.js");
  }

  return (
    <div className="pb-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {dataWorkExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 ">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
