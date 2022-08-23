import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterNavigation.module.scss";

const navData = [
  { id: 0, title: "Команда", link: "#" },
  { id: 1, title: "Новини", link: "#" },
  { id: 2, title: "Контакти", link: "#" },
  { id: 3, title: "Про нас", link: "#" },
  { id: 4, title: "Доставка та оплата", link: "#" },
  { id: 5, title: "Drabyna", link: "#", color: "light-color" },
];

type NavItemProps = {
  title: string;
  link: string;
  color?: string;
};

const NavItem: React.FC<NavItemProps> = ({ title, link, color }) => {
  return (
    <div className={styles.item}>
      <Link className={`${styles.link} ${color && "light-color"}`} to={link}>
        {title}
      </Link>
    </div>
  );
};

const FooterNavigation: React.FC = () => {
  return (
    <div className={styles.nav}>
      {navData?.map((item) => (
        <NavItem {...item} key={item.id} />
      ))}

      <div className={`${styles.item} ${styles.projectMenu}`}>
        <div className={styles.link}>
          <span className="txt">Колекції</span>
          <span className="ico">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="11.75"
                y="0.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 11.75 0.25)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="7.75"
                y="4.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 7.75 4.25)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                x="3.75"
                y="0.25"
                width="3.5"
                height="3.5"
                transform="rotate(90 3.75 0.25)"
                stroke="black"
                strokeWidth="0.5"
              />
            </svg>
          </span>
        </div>
        <ul className={styles.submenu}>
          <li className={styles.subitem}>
            <Link className={styles.link} to="/ua/etnodim_manifest/">
              Етнодім Маніфест 2021
            </Link>
          </li>
          <li className={styles.subitem}>
            <Link className={styles.link} to="/ua/etnodim_manifest/">
              Художня Колекція Etnodim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
