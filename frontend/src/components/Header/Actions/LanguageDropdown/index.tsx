import React from "react";
import { Link } from "react-router-dom";

import styles from "./LanguageDropdown.module.scss";

const LanguageDropdown: React.FC = () => {
  return (
    <div className={styles.languages}>
      <div className={styles.inner}>
        <div className={styles.close}>
          <div className={styles.closeIco}>
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

        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.item + " " + styles.itemActive}>
              <Link to="#">Українська / uah ₴</Link>
            </li>
            <li className={styles.item}>
              <Link to="https://etnodim.com/?ch_currency=USD">
                English / usd $
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="https://etnodim.com/?ch_currency=EUR">
                English / euro &euro;
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/ru/">російська / uah ₴</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
