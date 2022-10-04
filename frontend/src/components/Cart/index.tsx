import React from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useHeaderContext } from "../Header/HeaderContext";

import clsx from "clsx";

import styles from "./Cart.module.scss";

const Cart: React.FC = () => {
  const { cartOpened, setCartOpened } = useHeaderContext();

  const handleClickOutside = () => {
    setCartOpened(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div
      className={clsx([
        "popup js_basket",
        styles.basketPopup,
        cartOpened && styles.open,
      ])}
    >
      <div className={clsx(["popup__body", styles.basketBody])}>
        <div className="popup__inner" ref={ref}>
          <div className={clsx(["popup__content", styles.basketContent])}>
            <div className={styles.basket}>
              <div className={styles.basketInner}>
                <div className={styles.basketContainer}>
                  <div className={styles.basketTop}>
                    <div className={styles.basketTitle}>
                      You put this in your cart:
                    </div>
                    <div
                      className={clsx(["popup__close", styles.basketClose])}
                      onClick={() => setCartOpened(false)}
                    >
                      <div className="popup__close-ico">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="https://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.25"
                            y="0.25"
                            width="3.5"
                            height="3.5"
                            stroke="black"
                            strokeWidth="0.5"
                          ></rect>
                          <rect
                            x="4.25"
                            y="4.25"
                            width="3.5"
                            height="3.5"
                            stroke="black"
                            strokeWidth="0.5"
                          ></rect>
                          <rect
                            x="8.25"
                            y="8.25"
                            width="3.5"
                            height="3.5"
                            stroke="black"
                            strokeWidth="0.5"
                          ></rect>
                          <rect
                            x="8.25"
                            y="0.25"
                            width="3.5"
                            height="3.5"
                            stroke="black"
                            strokeWidth="0.5"
                          ></rect>
                          <rect
                            x="0.25"
                            y="8.25"
                            width="3.5"
                            height="3.5"
                            stroke="black"
                            strokeWidth="0.5"
                          ></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={styles.basketListWrapp}>
                    <div className={styles.basketList}>
                      <div className={styles.basketCase}>
                        <div className={styles.basketCaseBody}>
                          <div className={styles.basketImageWrapp}>
                            <div className={styles.basketCaseImage}>
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/images/menu-1.webp"
                                  type="image/webp"
                                />
                                <img
                                  className="lazyload lazyImg"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-src="./media/images/menu-1.jpg"
                                  alt="img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className={styles.basketCaseInfo}>
                            <div className={styles.basketCaseTop}>
                              <div className={styles.basketCaseTitle}>
                                Лляна Сукня&nbsp;
                                <br />
                                Pryhodko Blue синя
                              </div>
                            </div>
                            <div className={styles.basketCaseDescription}>
                              <div
                                className={clsx([
                                  styles.basketCaseRow,
                                  styles.basketCaseSize,
                                ])}
                              >
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColLabel,
                                  ])}
                                >
                                  Розмір
                                </div>
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.baskeCaseColTxt,
                                  ])}
                                >
                                  <select
                                    defaultValue=""
                                    className={styles.skuPropList}
                                  >
                                    <option value="205921">XS (40-42)</option>
                                    <option value="20592">42-44 | XS</option>
                                    <option value="205934">44-46 | XL</option>
                                    <option value="20594">46-48 | XXL</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  styles.basketCaseRow,
                                  styles.basketCaseCounter,
                                ])}
                              >
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColLabel,
                                  ])}
                                >
                                  К-сть
                                </div>
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCounter,
                                  ])}
                                >
                                  <span className={styles.minus}>-</span>
                                  <input
                                    className={styles.counter}
                                    type="text"
                                    value="1"
                                    readOnly
                                  />
                                  <span className={styles.plus}>+</span>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  styles.basketCaseRow,
                                  styles.basketCasePrice,
                                ])}
                              >
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColLabel,
                                  ])}
                                >
                                  Ціна
                                </div>
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColTxt,
                                  ])}
                                >
                                  <span>5200</span>
                                  <span className={styles.currencyIco}>
                                    грн
                                  </span>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  styles.basketCaseRow,
                                  styles.basketCaseSumm,
                                ])}
                              >
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColLabel,
                                  ])}
                                >
                                  Сума
                                </div>
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColTxt,
                                  ])}
                                >
                                  <span>5200</span>
                                  <span className={styles.currencyIco}>
                                    грн
                                  </span>
                                </div>
                              </div>
                              <div
                                className={clsx([
                                  styles.basketCaseRow,
                                  styles.basketCaseRemove,
                                ])}
                              >
                                <div
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColLabel,
                                  ])}
                                ></div>
                                <button
                                  className={clsx([
                                    styles.basketCaseCol,
                                    styles.basketCaseColTxt,
                                    styles.basketCaseRemove,
                                  ])}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.basketActions}>
                    <div className={styles.basketProdWrapp}>
                      <div className={styles.basketProdTitle}>
                        The total cost: 15600 грн
                      </div>
                    </div>
                    <div className={styles.basketButtons}>
                      <button
                        className={clsx([styles.basketBtn, styles.btnDark])}
                      >
                        Go to cart
                      </button>
                      <button
                        className={clsx([styles.basketBtn, styles.btnLight])}
                      >
                        Continue shopping
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
