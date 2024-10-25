// add page.tsx of app/projects/%5Bp_name%5D dynamic routing

import { title } from "process";

import { getProjectIdBySlug } from "@/app/handler";
import { getProjectById, Project } from "@/app/getProj";
import { Fragment } from "react";
import Effects from "@/components/Effects";
import { getComments, Comment } from "@/app/getComments";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { p_name: string };
}) {
  console.log(params.p_name);

  return { title: params.p_name + " - Chondromollika Ahmed - UI/UX Designer" };
}

export default async function ProjectDetails({
  params,
}: {
  params: { p_name: string };
}) {
  const id = await getProjectIdBySlug(params.p_name);
  const project = await getProjectById(id);
  const comments = await getComments(id);

  return (
    <Fragment>
      <Effects pageClassName="Projects" />
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          
            
              <div className="m-titles align-left">
                <h1
                  className="m-title splitting-text-anim-1 scroll-animate"
                  data-splitting="words"
                  data-animate="active"
                >
                  <span>{project.name}</span> 
                </h1>
                <div
                  className="m-subtitle splitting-text-anim-1 scroll-animate"
                  data-splitting="words"
                  data-animate="active"
                >
                  <span>
                    {project.fields.map((field, index) => (
                      <Fragment key={index}>
                        <i aria-hidden="true" className="fas fa-tags" />{" "}
                        {field + " "}
                      </Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="v-line v-line-right v-line-top">
              
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="m-details">
                      <div className="details-label">
                        <span>Year:</span>
                        <strong>
                          <span>
                            {new Date(
                              project.published_on * 1000
                            ).toLocaleString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              hour12: true,
                            })}
                          </span>
                        </strong>
                      </div>
                      <div className="details-label">
                        <span>Technology:</span>
                        <strong>
                          <span>
                            {/* find from the toools and map */}

                            {project.tools.map((tool, index) => (
                              <Fragment key={index}>
                                {
                                  // if its the last element
                                  index === project.tools.length - 1
                                    ? tool.title
                                    : tool.title + ", "
                                }
                              </Fragment>
                            ))}
                          </span>
                        </strong>
                      </div>
                      <div className="details-label">
                        <span>Tags :</span>
                        <strong>
                          <span>
                            {project.tags.map((tag, index) => (
                              <Fragment key={index}>
                                {
                                  // if its the last element
                                  index === project.tags.length - 1
                                    ? tag
                                    : tag + ", "
                                }
                              </Fragment>
                            ))}
                          </span>
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                    <a
                      target="_blank"
                      href={project.url}
                      className="btn scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <span>Live Preview</span>
                    </a>
                  </div>
                </div>
              </div>

              


            </div>
          
      </section>

      <section className="section section-inner m-archive">
        {/* addd comments from comments */}

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
              <div className="container">
                {project.modules.map((module, index) => (

                  module.components && console.log(module.components[0]?.src),
                  
                  <Fragment key={index}>
                    {
                      //  check if type is text or image
                      module.type === "text" ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: module.text || "",
                          }}
                        />
                      ) : module.type ==="image"? (
                        <div className="m-image">
                          <img
                            style={{ width: "100%", height: "100%" }}
                            src={module.src}
                            alt={module.alt_text ||""}
                            className="scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          />
                        </div>
                      ):null

                      // check if type is media_collection

                      

                    }

                    {

                      module.type === "media_collection" ? (
                        <div className="m-image">
                          <img
                            src={module.components?.[0]?.src}
                            alt={module.components?.[0].alt_text }
                            className="scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          />
                        </div>
                      ) : null

                    }

                    {
                      // check if type is media_collection
                      module.type === "media_collection" ? (
                        <div className="m-image">
                          <img
                          style={{ width: "100%", height: "100%" }}
                            src={module.src}
                            alt={module.alt_text}
                            className="scrolla-element-anim-1 scroll-animate"
                            data-animate="active"
                          />
                        </div>
                      ) : null
                    }
                  </Fragment>
                ))}
              </div>

              {/* Comments */}
              <div
                className="comments-post scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="section__comments">
                  <div className="m-titles">
                    <div className="m-title align-left">
                      {Array.isArray(comments) ? comments.length : 0} Comments
                    </div>
                  </div>

                  {Array.isArray(comments) && comments.length > 0 ? (
                    <ul className="comments">
                      {comments.map((comment: Comment, index) => (
                        <li className="comment comment-item" key={comment.id}>
                          <div className="comment comment-box">
                            <img
                              src={comment.user.images[276]}
                              className="avatar"
                              alt=""
                            />
                            <div className="comment-box__body">
                              <div className="content-caption post-content description">
                                <h5 className="comment-box__details">
                                  {comment.user.display_name}{" "}
                                  <span>{new Date(
                              comment.created_on * 1000
                            ).toLocaleString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              hour12: true,
                            })}</span>
                                </h5>
                                <p>{comment.comment}</p>
                              </div>
                            </div>
                            <div className="comment-footer">
                              <a
                                className="comment-reply-link"
                                href={project.url}
                              >
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
