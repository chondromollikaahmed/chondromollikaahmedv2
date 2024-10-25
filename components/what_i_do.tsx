"use client"; // Error components must be Client Components

import { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { servicesSliderProps } from "@/components/utility/sliderProps";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

export interface Service {
  title: string;
  icon: string;
  description: string[];
  toolsUsed: string[];
}

export default function WhatIDo({ services }: { services: Service[] }) {
//   console.log(services);
  return (
    <Fragment>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              {services.map((service, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="services-item">
                    <div className="lui-subtitle">
                      <span> {service.title} </span>
                    </div>
                    <div className="icon" style={{ textAlign: "center" }}>
                      
                        {service.icon} 
                    </div>
                    <div className="lui-text">
                      <div>
                        {service.description.map((desc, index) => (
                          <p key={index}>{desc}</p>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{ display: "inline-flex", alignItems: "baseline" }}
                    >
                      <div
                        className="icon"
                        style={{ marginRight: "8px", lineHeight: "24px" }}
                      >
                        <i
                          className="fas fa-tools"
                          style={{ fontSize: "24px" }}
                        ></i>
                      </div>
                      <div className="lui-text" style={{ display: "inline" ,minHeight: "24px" }}>
                        {service.toolsUsed.map((tool, index) => (
                          <span key={index}>
                            {tool}
                            {index < service.toolsUsed.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
