import React from "react";
import { Link } from "react-router-dom";

const PreviewsSlider: React.FC = () => {
  return (
    <div className="preview-goods mb-162">
      <div className="preview-goods__inner site-container">
        <div className="preview-goods__title">
          Нові моделі
          <br /> вишиванок
          <br /> та суконь
        </div>
        <div className="preview-goods__wrapper swiper js_goods-swiper">
          <div className="preview-goods__list swiper-wrapper">
            <div className="preview-goods__case swiper-slide">
              <div className="goods-case">
                <div className="goods-case__inner">
                  <div className="goods-case__image">
                    <Link
                      className="swiper goods-case__image-slider js_goods-preview-swiper"
                      to="#"
                    >
                      <span className="goods-case__image-wrapper swiper-wrapper">
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-1.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-1.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-1.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-1.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-1.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-1.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-1.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-1.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                      </span>
                      <div className="goods-case__image-next">
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
                      <div className="goods-case__image-prev">
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
                    </Link>
                    <div className="goods-case__actions">
                      <ul className="goods-case__sizes">
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXS
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">XS</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">S</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">M</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            L
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XL
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXL
                          </Link>
                        </li>
                      </ul>
                      <Link className="goods-case__buy" to="#">
                        + в кошик
                      </Link>
                    </div>
                  </div>
                  <Link className="goods-case__title" to="#">
                    Біла лляна сукня з рослинним орнаментом Sobachko
                  </Link>
                  <div className="goods-case__price">Ціна: 4 200 грн.</div>
                </div>
              </div>
            </div>
            <div className="preview-goods__case swiper-slide">
              <div className="goods-case">
                <div className="goods-case__inner">
                  <div className="goods-case__image">
                    <Link
                      className="swiper goods-case__image-slider js_goods-preview-swiper"
                      to="#"
                    >
                      <span className="goods-case__image-wrapper swiper-wrapper">
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-2.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-2.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-2.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-2.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-2.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-2.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-2.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-2.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                      </span>
                      <div className="goods-case__image-next">
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
                      <div className="goods-case__image-prev">
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
                    </Link>
                    <div className="goods-case__actions">
                      <ul className="goods-case__sizes">
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXS
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">XS</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">S</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">M</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            L
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XL
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXL
                          </Link>
                        </li>
                      </ul>
                      <Link className="goods-case__buy" to="#">
                        + в кошик
                      </Link>
                    </div>
                  </div>
                  <Link className="goods-case__title" to="#">
                    Зелена лляна вишиванка Korchynskyi Green
                  </Link>
                  <div className="goods-case__price">Ціна: 4 200 грн.</div>
                </div>
              </div>
            </div>
            <div className="preview-goods__case swiper-slide">
              <div className="goods-case">
                <div className="goods-case__inner">
                  <div className="goods-case__image">
                    <Link
                      className="swiper goods-case__image-slider js_goods-preview-swiper"
                      to="#"
                    >
                      <span className="goods-case__image-wrapper swiper-wrapper">
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-3.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-3.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-3.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-3.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-3.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-3.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-3.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-3.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                      </span>
                      <div className="goods-case__image-next">
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
                      <div className="goods-case__image-prev">
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
                    </Link>
                    <div className="goods-case__actions">
                      <ul className="goods-case__sizes">
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXS
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">XS</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">S</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">M</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            L
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XL
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXL
                          </Link>
                        </li>
                      </ul>
                      <Link className="goods-case__buy" to="#">
                        + в кошик
                      </Link>
                    </div>
                  </div>
                  <Link className="goods-case__title" to="#">
                    Лляна сорочка з вишивкою Saenko
                  </Link>
                  <div className="goods-case__price">Ціна: 4 200 грн.</div>
                </div>
              </div>
            </div>
            <div className="preview-goods__case swiper-slide">
              <div className="goods-case">
                <div className="goods-case__inner">
                  <div className="goods-case__image">
                    <Link
                      className="swiper goods-case__image-slider js_goods-preview-swiper"
                      to="#"
                    >
                      <span className="goods-case__image-wrapper swiper-wrapper">
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-4.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-4.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-4.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-4.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-4.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-4.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                        <span className="swiper-slide goods-case__image-slide">
                          <picture>
                            <source
                              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-srcset="./media/img/goods-4.webp"
                              type="image/webp"
                            />
                            <img
                              className="lazyload lazy_img"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAQAAAAziH6sAAAADklEQVR42mNkYGBkYAAAAA8AA7qm8EcAAAAASUVORK5CYII="
                              data-src="./media/img/goods-4.jpg"
                              alt="img"
                            />
                          </picture>
                        </span>
                      </span>
                      <div className="goods-case__image-next">
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
                      <div className="goods-case__image-prev">
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
                    </Link>
                    <div className="goods-case__actions">
                      <ul className="goods-case__sizes">
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXS
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">XS</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">S</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link to="#">M</Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            L
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XL
                          </Link>
                        </li>
                        <li className="goods-case__sizes-item">
                          <Link className="unavailable" to="#">
                            XXL
                          </Link>
                        </li>
                      </ul>
                      <Link className="goods-case__buy" to="#">
                        + в кошик
                      </Link>
                    </div>
                  </div>
                  <Link className="goods-case__title" to="#">
                    Жовта лляна сукня з вишивкою Prykhodko Yellow
                  </Link>
                  <div className="goods-case__price">Ціна: 4 200 грн.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="goods-case__next">
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
          <div className="goods-case__prev">
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
      </div>
    </div>
  );
};

export default PreviewsSlider;
