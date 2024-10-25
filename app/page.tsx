import Effects from "@/components/Effects";
import PortfolioIsotope from "@/components/Portfolio";
import { getProjectCount } from "./handler";

import WhatIDo, { Service } from "@/components/what_i_do";
import Contact from "@/components/contact";
import Blog from "@/components/Blog";
 // Import Swiper styles


 // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Resume from "@/components/Resume";
import TypedComponent from "@/components/use_client/TypedComponent";
import Image from "next/image";



export default async function Home() {
  const currentYear = new Date().getFullYear();
  const projectCount = getProjectCount();
  const links= `${process.env.URL}/what_i_do.json`;
  console.log(links);
  const services: Service[] = await fetch(links).then((res) => res.json());

  // console.log(services);

  return (
    //
    <main>

      
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"></link>
      <Effects pageClassName="Home" />

      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      <b> بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ </b>,نفسي
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Chondromollika</b> Ahmed{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am 
                    <TypedComponent/>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      Fuelled by passion and creativity, a UI/UX designer and
                      developer crafting intuitive, user-friendly digital
                      experiences that stand out
                    </p>
                  </div>
                  <div className="social-links">
                  <a target="_blank" rel="nofollow" href="https://bento.me/chondromollikaahmed">
                      <i aria-hidden="true" className="fab fa-readme" />
                    </a>

                  <a target="_blank" rel="nofollow" href="https://www.pinterest.com/chandramallikaahmed/">
                      <i aria-hidden="true" className="fab fa-pinterest" />
                    </a>
                  <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/chondromollikaahmed/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://twitter.com/chondromollika_">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://dribbble.com/ChondromollikaAhmed">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.behance.net/chondromollikaahmed">
                      <i aria-hidden="true" className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Image
                  fill={true}
                  decoding="async"
                  src="/assets/images/bg.png"
                  alt="<b>Chondromollika</b> Ahmed"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        {currentYear - 2023} <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">{projectCount}</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> UI/UX , React </span>
            </div>
          </div>
        </div>
      </section>

      

      <WhatIDo  services={services}/>

      <Resume />
      {/* Section - Works */}
      <section className="lui-section lui-gradient-bottom" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope noViewMore={false} />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      <Blog />


      <Contact />



    </main>
  );
}
