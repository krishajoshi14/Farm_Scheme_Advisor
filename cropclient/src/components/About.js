import React from "react";
import { LuBrainCircuit } from "react-icons/lu"; // Importing the LuBrainCircuit icon from react-icons
import { MdOutlineGppGood } from "react-icons/md";
import aboutImg from "../assets/about.jpg";

const About = () => {
  const info = [
    {
      text: "Our platform centralizes government scheme information, offering detailed insights on eligibility, application processes, and step-by-step guides.",
      count: "Comprehensive Information",
    },
    {
      text: "Our recommendation engine tailors scheme suggestions based on a questionnaire, ensuring farmers get the most relevant information.",
      count: "Personalized Scheme Recommendations",
    },
  ];
  return (
    <section id="about" className="py-10 text-white bg-green-700">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-green-400">Us</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-100 my-3">
              <p
                className="text-justify text-l leading-7 w-11/12 mx-auto"
                style={{ fontSize: "18px" }}
              >
                <p>
                India is home to over 15 crore farmer families, each contributing 
                to the country's diverse agricultural landscape. With varying 
                agroclimatic zones, languages, and crops, our farmers face a unique 
                set of challenges.
                </p>
                <br />
                <p>
                Central and state governments offer numerous schemes to support 
                farmers, each with specific eligibility requirements and application 
                processes. Farm Policy Advisor simplifies this by centralizing 
                information on all schemes, making it easier for farmers to find and 
                apply for benefits online.
                </p>
                <br />
                <p>
                Our mission is to empower farmers with the tools and knowledge they 
                need to succeed.
                </p>
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {index === 0 ? (
                      <LuBrainCircuit className="border rounded-full text-white text-7xl px-2 mt-2 mb-3" /> // First icon
                    ) : (
                      <MdOutlineGppGood className="border rounded-full text-white text-7xl px-2 mt-2 mb-3" /> // Second icon
                    )}
                    <h3 className="md:text-2xl text-2xl font-semibold text-green-400 mt-2">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs mt-3">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-45 relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
