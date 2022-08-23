import React from "react";
import { Link } from "react-router-dom";

const BlogSliderBig: React.FC = () => {
  return (
    <div className="blog">
      <div className="blog__inner site-container mb-128">
        <div className="posts swiper js_posts-swiper mb-80">
          <div className="blog-post__list swiper-wrapper">
            <div className="blog-post__case swiper-slide">
              <Link className="blog-post__img" to="#">
                <picture>
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-srcset="./media/img/smilyvist-1.webp"
                    type="image/webp"
                  />
                  <img
                    className="lazyload lazy_img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-src="./media/img/smilyvist-1.jpg"
                    alt="img"
                  />
                </picture>
                <span className="blog-post__link">
                  <span className="txt">переглянути</span>
                  <span className="ico">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 4.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="0.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 0.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="8.25"
                        y="3.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 8.25 3.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="12.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 12.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="16.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 16.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link className="blog-post__title" to="#">
                Вишиті сорочки з орнаментом українських міст-героїв Yednist та
                Smilyvist
              </Link>
            </div>
            <div className="blog-post__case swiper-slide">
              <Link className="blog-post__img" to="#">
                <picture>
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-srcset="./media/img/vdosvita-1.webp"
                    type="image/webp"
                  />
                  <img
                    className="lazyload lazy_img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-src="./media/img/vdosvita-1.jpg"
                    alt="img"
                  />
                </picture>
                <span className="blog-post__link">
                  <span className="txt">переглянути</span>
                  <span className="ico">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 4.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="0.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 0.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="8.25"
                        y="3.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 8.25 3.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="12.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 12.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="16.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 16.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link className="blog-post__title" to="#">
                Фотопроект “Вдосвіта”
              </Link>
            </div>
            <div className="blog-post__case swiper-slide">
              <Link className="blog-post__img" to="#">
                <picture>
                  <source
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-srcset="./media/img/zagadka-1.webp"
                    type="image/webp"
                  />
                  <img
                    className="lazyload lazy_img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    data-src="./media/img/zagadka-1.jpg"
                    alt="img"
                  />
                </picture>
                <span className="blog-post__link">
                  <span className="txt">переглянути</span>
                  <span className="ico">
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 4.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="0.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 0.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="8.25"
                        y="3.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 8.25 3.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="12.25"
                        y="7.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 12.25 7.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <rect
                        x="16.25"
                        y="11.75"
                        width="3.5"
                        height="3.5"
                        transform="rotate(-90 16.25 11.75)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link className="blog-post__title" to="#">
                Проєкт Intonacia спільний з брендом Bloxa
              </Link>
            </div>
          </div>
          <div className="blog-post__btn-next">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.75"
                y="11.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 7.75 11.75)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="3.75"
                y="7.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 3.75 7.75)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="7.75"
                y="3.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 7.75 3.75)"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="blog-post__btn-prev">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.75"
                y="11.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 7.75 11.75)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="3.75"
                y="7.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 3.75 7.75)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="7.75"
                y="3.75"
                width="3.5"
                height="3.5"
                transform="rotate(-180 7.75 3.75)"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
        <div className="blog__link">
          <Link className="site-link site-link--arrow" to="#">
            <span className="txt">До всіх новин</span>
            <span className="ico">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.25"
                  y="4.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="0.25"
                  y="0.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="8.25"
                  y="8.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="4.25"
                  y="12.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <rect
                  x="0.25"
                  y="16.25"
                  width="3.5"
                  height="3.5"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSliderBig;
