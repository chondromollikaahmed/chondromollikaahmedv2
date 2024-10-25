// app/components/ExperienceToggle.tsx (Client Component)

"use client";

import { useState } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  startYear: number;
  endYear?: number;
  dec: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Techy's",
    startYear: 2024,
dec: `Designed user-friendly interfaces for web and mobile apps. 
Conducted user research and created wireframes, prototypes.
Improved usability through testing and feedback analysis.
Ensured brand consistency across all platforms.
Used Figma and Adobe XD for design and prototyping.`,
  },
  { id: 2, title: "...", company: "C...m", startYear: 2019, dec: "" },
];

const ExperienceToggle = () => {
  const [experienceToggle, setExperienceToggle] = useState<number>(1);

  return (
    <>
      {experienceData.map((experience) => (
        <div
          key={experience.id}
          className={`history-item lui-collapse-item scroll-animate ${
            experienceToggle === experience.id ? "opened" : ""
          }`}
          data-animate="active"
        >
          <h6
            className={`name lui-collapse-btn ${
              experienceToggle === experience.id ? "active" : ""
            }`}
            onClick={() => setExperienceToggle(experience.id)}
          >
            <span> {experience.title} </span>
          </h6>
          <div className="history-content">
            <div className="subname">
              <span> {experience.company} </span>
            </div>
            <div className="date lui-subtitle">
              <span>
                {experience.startYear} -{" "}
                {experience.endYear ? experience.endYear : <b>Present</b>}
              </span>
            </div>
            <div className="text">
              <div>
                <p>{experience.dec}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceToggle;
