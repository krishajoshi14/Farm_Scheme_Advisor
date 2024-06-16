import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import mod1 from "../assets/iden.png";
import mod2 from "../assets/age.png";
import AgeIden from "./AgeIden";
import CropIden from "./CropIden";

const Module = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setSelectedContent(content);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContent(null);
  };

  const skills = [
    {
      logo: mod1,
      level: "Find Schemes",
      desc: "Explore a comprehensive database of agricultural schemes, providing you with detailed information on all available government programs designed to support and enhance your farming needs",
      button: "Find Schemes",
      content: <CropIden />,
    },
    {
      logo: mod2,
      level: "Recommend Schemes",
      desc: "Discover the right agricultural schemes for you! Answer a few questions and get personalized recommendations based on your eligibility.",
      button: "Recommend ",
      content: <AgeIden />,
    },
  ];

  return (
    <section id="module" className="py-10 bg-green-400 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Our <span className="text-green-800">Modules</span>
        </h3>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          style={{ gap: "18rem" }}
        >
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="group relative min-w-[10rem] max-w-[26rem] bg-green-700 p-10 rounded-xl flex flex-col items-center justify-center"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img
                    src={skill.logo}
                    className="w-24 h-24 object-contain "
                    alt={skill.level}
                  />
                </div>
              </div>
              <p className="text-3xl mt-4 text-green-400 font-semibold">
                {skill.level}
              </p>
              <p className="text-1xl text-white mt-3">{skill.desc}</p>
              <button
                className="btn-primary-2 mt-8"
                onClick={() => openModal(skill.content)}
              >
                {skill.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-4/5 max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>
            {selectedContent}
          </div>
        </div>
      )}
    </section>
  );
};

export default Module;
