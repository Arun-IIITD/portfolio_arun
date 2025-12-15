import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";

function Experience() {
  const cardItem = [
    { id: 1, icon: SiMongodb, name: "MongoDB" },
    { id: 2, icon: FaCss3Alt, name: "CSS" },
    { id: 3, icon: FaReact, name: "React.js" },
    { id: 4, icon: FaJs, name: "JavaScript" },
    { id: 5, icon: FaNodeJs, name: "Node.js" },
    { id: 6, icon: SiExpress, name: "Express.js" },
    { id: 7, icon: FaPython, name: "Python" },
    { id: 8, icon: FaHtml5, name: "HTML" },
    { id: 9, icon: SiPostman, name: "Postman" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-3 underline">Experience</h1>
      <p className="mb-6">
        I've more than 2 years of experience in the following technologies.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-7">
        {cardItem.map(({ id, icon: Icon, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center
                       border-2 rounded-full md:w-[200px] md:h-[200px]
                       shadow-md p-4 cursor-pointer
                       hover:scale-110 duration-300"
          >
            <Icon className="text-6xl mb-2" />
            <span className="font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
