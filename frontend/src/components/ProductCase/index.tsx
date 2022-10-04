import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styles from "./ProductCase.module.scss";

//redux
import { Product } from "../../redux/productPreview/types";

const ProductCase: React.FC<Product> = ({ _id, options, link, title, price }) => {
  return (
    <div key={String(_id)} className={clsx([styles.previewGoodsCase])}>
      <div className={clsx([styles.goodsCase])}>
        <div className={clsx([styles.goodsCaseInner])}>
          <div className={clsx([styles.goodsCaseImage])}>
            <Splide
              options={{
                pagination: false,
              }}
              hasTrack={false}
              className={clsx([styles.goodsCaseImageSlider])}
            >
              <SplideTrack className={clsx([styles.goodsCaseImageWrapper])}>
                {options?.images?.map((imgLink, ind) => (
                  <SplideSlide
                    key={ind}
                    className={clsx([styles.goodsCaseImageSlide])}
                  >
                    <div className={clsx([styles.goodsCaseImageSlideInner])}>
                      <picture>
                        <img
                          className="lazyload lazy_img"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                          data-src={imgLink}
                          alt="img"
                        />
                      </picture>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
              <div className="splide__arrows">
                <div
                  className={clsx([
                    styles.goodsCaseImagePrev,
                    "splide__arrow splide__arrow--prev",
                  ])}
                >
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
                <div
                  className={clsx([
                    styles.goodsCaseImageNext,
                    "splide__arrow splide__arrow--next",
                  ])}
                >
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
            </Splide>

            <div className={clsx([styles.goodsCaseActions])}>
              <ul className={clsx([styles.goodsCaseSizes])}>
                {options.sizes?.map(({ title }, ind) => (
                  <li key={ind} className={clsx([styles.goodsCaseSizesItem])}>
                    <button>{title}</button>
                  </li>
                ))}
              </ul>
              <button className={clsx([styles.goodsCaseBuy])}>+ в кошик</button>
            </div>
          </div>
          <Link className={clsx([styles.goodsCaseTitle])} to={link}>
            {title}
          </Link>
          <div className={clsx([styles.goodsCasePrice])}>
            Price: {Object.values(price.base)[0]} {price.currency}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCase;
