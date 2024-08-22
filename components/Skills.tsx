import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Skills = () => {
  let dataSkills = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut suscipit vero harum eius fuga deleniti voluptatum tenetur necessitatibus, nesciunt consectetur obcaecati consequuntur laboriosam reiciendis accusamus nam, labore quae voluptas dolorum!",
      title: "Python",
      img: "technologies/skill-icons--python-light.svg",
    },
  ];

  try {
    const { skills } = require("@/config/index");
    dataSkills = skills || dataSkills;
  } catch (error) {
    console.error("Failed to load from index.js");
  }

  return (
    <section className="py-20" id="skills">
      <h1 className="heading">
        Development <span className="text-purple">Tools</span>
      </h1>
      <div className="flex flex-col items-center lg:mt-10">
        <InfiniteMovingCards
          items={dataSkills}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
};

export default Skills;
