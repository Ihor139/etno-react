import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

const navItems = [
  {
    id: 1,
    dataMenu: "women",
    title: "Жінкам",
    dataImage: "./media/img/menu-1.jpg",
  },
  {
    id: 2,
    dataMenu: "men",
    title: "Чоловікам",
    dataImage: "./media/img/menu-2.jpg",
  },
  {
    id: 3,
    dataMenu: "children",
    title: "Дітям",
    dataImage: "./media/img/menu-3.jpg",
  },
  {
    id: 4,
    dataMenu: "accessories",
    title: "Аксесуари",
    dataImage: "./media/img/menu-4.jpg",
  },
  {
    id: 5,
    dataMenu: "discounts",
    title: "Знижки",
    dataImage: "./media/img/menu-5.jpg",
  },
];

const Navigation: React.FC = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        {navItems?.map((item) => (
          <li key={item.id} className={styles.item} data-menu={item.dataMenu}>
            <div className={styles.itemInner}>
              <Link
                className={styles.title}
                to="#"
                data-picture-src={item.dataImage}
              >
                <span className={styles.txt}>{item.title}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
