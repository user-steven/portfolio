import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { skills } from "@/data";

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <h1 className="heading">
        Development <span className="text-purple">Tools</span>
      </h1>
      <div className="flex flex-col items-center lg:mt-10">
        <InfiniteMovingCards
          items={skills}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default Skills;
