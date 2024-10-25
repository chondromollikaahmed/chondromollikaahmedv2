//Portfolio.tsx
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { getFieldSet, getProjectsALL, Project } from "@/app/handler";
import Image from "next/image";
const PortfolioEffects = dynamic(
  () => import("@/components/PortfolioEffects"),
  { ssr: false }
);

const PortfolioIsotope = async ({ noViewMore }: { noViewMore: any }) => {
  const fields = await getFieldSet();
  const projects: Project[] = await getProjectsALL();
  const initialProjects = projects;
  const remainingProjects = projects.slice(15);

  return (
    <Fragment>
      <div className="works-box">
        <PortfolioEffects fields={fields} />

        <div className="works-items works-masonry-items row">
          {/* owner info from project[0] with gradient tranparent watercolor bg */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 owner-info ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        decoding="async"
                        src={projects[0].owners[0].images["115"]}
                        alt="Chondromollika Ahmed"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">
                  {/* company icon */}
                  <i className="fas fa-building"></i>{" "}
                  {projects[0].owners[0].company}
                </span>
                <h5 className="name">
                  <Link legacyBehavior href="/">
                    <a>Chondromollika Ahmed</a>
                  </Link>
                </h5>

                <div className="stats-bar">
                  <div
                    className="followers"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "5px 10px",
                      transition: "background-color 0.3s ease",
                      borderRadius: "8px",
                      height: "100%", // Match the height of the stats bar
                      lineHeight: "1.5", // Set line height to help align items
                    }}
                  >
                    <i
                      className="fa fa-users"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <span>{projects[0].owners[0].stats.followers}</span>
                  </div>
                  <div
                    className="following"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "5px 10px",
                      transition: "background-color 0.3s ease",
                      borderRadius: "8px",
                      height: "100%", // Match the height of the stats bar
                      lineHeight: "1.5", // Set line height to help align items
                    }}
                  >
                    <i
                      className="fa fa-user-plus"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <span>{projects[0].owners[0].stats.following}</span>
                  </div>
                  <div
                    className="appreciations"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "5px 10px",
                      transition: "background-color 0.3s ease",
                      borderRadius: "8px",
                      height: "100%", // Match the height of the stats bar
                      lineHeight: "1.5", // Set line height to help align items
                    }}
                  >
                    <i
                      className="fa fa-thumbs-up"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <span>{projects[0].owners[0].stats.appreciations}</span>
                  </div>
                  <div
                    className="views"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "5px 10px",
                      transition: "background-color 0.3s ease",
                      borderRadius: "8px",
                      height: "100%", // Match the height of the stats bar
                      lineHeight: "1.5", // Set line height to help align items
                    }}
                  >
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <span>{projects[0].owners[0].stats.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 owner-info">
            <div className="content">
              <h2>Owner Name</h2>
              <p>Some description about the owner.</p>
            </div>
          </div> */}

          {initialProjects.map((project: Project) => {
            const projectFields = project.fields
              .map(
                (field) =>
                  `sorting-${field.toLowerCase().replace(/[\s/]+/g, "-")}`
              )
              .join(" ");

            // console.log(projectFields);

            return (
              <div
                className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 ${projectFields}` } key={project.id}
              >
                <div
                  className="works-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <div className="img">
                      <Link legacyBehavior href={`/projects/${project.slug}`}>
                        <a>
                          <img
                            decoding="async"
                            src={project.covers["404"]}
                            alt={project.name}
                          />
                          <span className="overlay" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="desc">
                    <span className="category">
                      {project.fields?.map((field, index) => (
                        <span key={index}>
                          <i className="fas fa-tag"></i> {field}{" "}
                        </span>
                      ))}
                    </span>

                    <h5 className="name">
                      <Link legacyBehavior href={`/projects/${project.slug}`}>
                        <a>{project.name}</a>
                      </Link>
                    </h5>
                    <div
                      className="likes-views"
                      style={{ position: "relative" }}
                    >
                      <div className="like-appreciate">
                        <span className="likes">
                          <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                          {project.stats.appreciations}
                        </span>
                        <span className="views">
                          <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                          {project.stats.views}
                        </span>
                      </div>
                    </div>
                    <div className="text">
                      <p style={{ marginTop: "0px" }}>
                      
                        <span style={{ fontFamily: "Caveat, cursive", fontSize: "1.4em" }}>
                        Published On :
                          {new Date(project.published_on * 1000).toLocaleString()}

                        </span>
                      </p>
                    </div>
                    <Link legacyBehavior href={`/projects/${project.slug}`}>
                      <a className="lnk">See project</a>
                    </Link>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
