// app/components/EducationToggle.tsx (Client Component)

"use client";

import { useState } from "react";

interface Education {
  id: number;
  academy: string;
  title: string;
  startYear: number;
  endYear: number;
  dec: string;
}

const educationData: Education[] = [
  {
    id: 1,
    academy: "Ahsanullah University of Science and Technology",
    title: "B.Sc. in Computer Science and Engineering",
    startYear: 2019,
    endYear: 2023,
    dec: "Ahsanullah University of Science and Technology (AUST) (Bengali: আহসানউল্লাহ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়) is a top tier engineering university in Bangladesh. The university offers undergraduate and post-graduate degrees in engineering disciplines.",
  },
  {
    id: 2,
    academy: "Shaheed Bir Uttam LT. Anawar Girls College",
    title: "H.S.C in Science",
    startYear: 2016,
    endYear: 2018,
    dec: "Shaheed Bir Uttam Lt. Anwar Girls School & College[1] (Bengali: শহীদ বীর উত্তম লেঃ আনোয়ার গার্লস স্কুল এন্ড কলেজ) is a high school in Dhaka Cantonment, Dhaka, Bangladesh.The institution was established in 1957.",
  },
  {
    id: 3,
    academy: "Monipur High School, Dhaka",
    title: "S.S.C in Science",
    startYear: 2008,
    endYear: 2016,
    dec: "Monipur High School & College (MHSC) (Bengali: মনিপুর উচ্চ বিদ্যালয় ও কলেজ) is a secondary school and college located in Mirpur, Dhaka, Bangladesh. The school is also known as Monipur Uccha Biddalaya Ebong College (MUBC).",
  },
];

const EducationToggle = () => {
  const [educationToggle, setEducationToggle] = useState<number | null>(1);

  return (
    <>
      {educationData.map((education) => (
        <div
          key={education.id}
          className={`history-item lui-collapse-item scroll-animate ${
            educationToggle === education.id ? "opened" : ""
          }`}
          data-animate="active"
        >
          <h6
            className={`name lui-collapse-btn ${
              educationToggle === education.id ? "active" : ""
            }`}
            onClick={() =>
              setEducationToggle(
                educationToggle === education.id ? null : education.id
              )
            }
          >
            <span> {education.academy} </span>
          </h6>
          <div className="history-content">
            <div className="subname">
              <span> {education.title} </span>
            </div>
            <div className="date lui-subtitle">
              <span>
                {" "}
                {education.startYear} - {education.endYear}{" "}
              </span>
            </div>
            <div className="text">
              <div>
                <p>{education.dec}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EducationToggle;
