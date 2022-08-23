import React from "react";

import {
  BasketIcon,
  ContactIcon,
  LanguagesIcon,
  SearchIcon,
} from "../../../UI/Icons";

import styles from "./Action.module.scss";

const actions = [
  { id: 1, title: "Пошук", actionClassName: "search", icon: <SearchIcon /> },
  {
    id: 2,
    title: "Контакти",
    actionClassName: "contact",
    icon: <ContactIcon />,
  },
  {
    id: 3,
    title: "Ua/₴",
    actionClassName: "languages",
    icon: <LanguagesIcon />,
  },
  {
    id: 4,
    title: "Кошик",
    count: "1",
    actionClassName: "basket",
    icon: <BasketIcon />,
  },
];

const Action: React.FC = ({}) => {
  return (
    <div className={styles.action}>
      <ul className={styles.list}>
        {actions?.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${item.actionClassName}}`}
          >
            <div className={styles.title}>
              <div className={styles.ico}>{item.icon}</div>
              <div className={styles.txt}>{item.title}</div>
              {item.count && <div className={styles.count}>1</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Action;
