import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchDropdown.module.scss";

const SearchDropdown: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <label className={styles.formLabel}>
                <span className={styles.formTxt}></span>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="почніть вводити, щоб шукати"
                />
              </label>
            </form>
            <div className={styles.close}>
              <div className={styles.closIco}>
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

          <div className={styles.result}>
            <div className={styles.resultInner}>
              <ul className={styles.resultList}>
                <li className={styles.resultItem}>
                  <Link className={styles.resultLink} to="#">
                    Темно-сіра вишиванка з білими вставками Vintage grey
                  </Link>
                </li>
                <li className={styles.resultItem}>
                  <Link className={styles.resultLink} to="#">
                    Блузка з білим рослинним орнаментом Pure
                  </Link>
                </li>
                <li className={styles.resultItem}>
                  <Link className={styles.resultLink} to="#">
                    Вишиванка з льону з рослинним орнаментом Butterfly
                  </Link>
                </li>
                <li className={styles.resultItem}>
                  <Link className={styles.resultLink} to="#">
                    Льняна блузка з червоно-білою вишивкою Elin
                  </Link>
                </li>
                <li className={styles.resultItem}>
                  <Link className={styles.resultLink} to="#">
                    Біла лляна сукня з рослинним орнаментом White Flower
                  </Link>
                </li>
              </ul>
              <Link className={styles.resultAll} to="#">
                <span className={styles.resultAllTxt}>усі результати</span>
                <span className={styles.resultAllIco}>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                      fill="#808080"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
