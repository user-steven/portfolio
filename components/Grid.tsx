import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  let dataGridItems = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos ut nisi nihil eligendi nobis rerum sequi ratione officiis, facilis id fugit vel sapiente mollitia, sint dolorum deleniti aliquam fuga.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/computer.jpg",
      spareImg: "",
    },
  ];

  try {
    const { gridItems } = require("@/config/index");
    dataGridItems = gridItems || dataGridItems;
  } catch (error) {
    console.error("Failed to load from index.js");
  }

  return (
    <section id="about">
      <BentoGrid>
        {dataGridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
