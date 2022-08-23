import React from "react";
import { Link } from "react-router-dom";

import styles from "./MenuItem.module.scss";

type MenuItemProps = {
  key: number;
  id: number;
  name: string;
  image: string };

const MenuItem: React.FC<MenuItemProps> = ({ image, name }) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <Link to="#" data-picture-src={image}>
          <span data-hover-name={name}>{name}</span>
          <span className={styles.arrow}>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <rect
                x="4.25"
                y="4.25"
                width="3.5"
                height="3.5"
                stroke="black"
                strokeWidth="0.5"
              ></rect>
              <rect
                x="0.25"
                y="0.25"
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
                x="4.25"
                y="12.25"
                width="3.5"
                height="3.5"
                stroke="black"
                strokeWidth="0.5"
              ></rect>
              <rect
                x="0.25"
                y="16.25"
                width="3.5"
                height="3.5"
                stroke="black"
                strokeWidth="0.5"
              ></rect>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
