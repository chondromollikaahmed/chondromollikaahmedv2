import Link from "next/link";

import { getAllBlog, Articles } from "@/app/getBlog";
import { Fragment } from "react";
import Image from "next/image";

export default async function Blog() {
  const articles: Articles = (await getAllBlog()) || [];
//   console.log(articles);
  return (
    <Fragment>
      {/* Section - Blog */}
      <section className="lui-section lui-gradient-top" id="blog-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Latest Blog </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Archive */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              {articles.map((article) => (
                <div
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-6"
                  key={article.id}
                >
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link legacyBehavior href={article.url}>
                        <a>
                          <img
                            decoding="async"
                            src={article.cover_image}
                            alt="The Main Thing For The Designer"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category lui-subtitle">
                        <span>
                          {" "}
                          {new Date(article.created_at).toLocaleString(
                            "default",
                            { month: "long", day: "numeric", year: "numeric" }
                          )}
                        </span>
                      </div>
                      <h5 className="lui-title">
                        <Link legacyBehavior href={article.url}>
                          <a>{article.title}</a>
                        </Link>
                      </h5>
                      <div className="lui-text">
                        <p>{article.description} </p>
                        <div className="readmore">
                          <Link legacyBehavior href={article.url}>
                            <a className="lnk">Read more</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
            <div className="load-more">
              <Link legacyBehavior href="/blog">
                <a
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View Blog</span>
                </a>
              </Link>
            </div>
            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
