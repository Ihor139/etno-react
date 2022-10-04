import React from "react";

import {
  BasketIcon,
  ContactIcon,
  LanguagesIcon,
  SearchIcon,
} from "../../../UI/Icons";
import { useHeaderContext } from "../../HeaderContext";

import styles from "./Action.module.scss";

const Action: React.FC = () => {
  const {
    searchOpened,
    setSearchOpened,
    contactOpened,
    setContactOpened,
    languageOpened,
    setLanguageOpened,
    cartOpened,
    setCartOpened,
  } = useHeaderContext();

  // to do
  // create toggle click on action

  return (
    <div className={styles.action}>
      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={() => setSearchOpened(!searchOpened)}
        >
          <div className={styles.title}>
            <div className={styles.ico}>
              <SearchIcon />
            </div>
            <div className={styles.txt}>Search</div>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setContactOpened(!contactOpened);
          }}
        >
          <div className={styles.title}>
            <div className={styles.ico}>
              <ContactIcon />
            </div>
            <div className={styles.txt}>Contacts</div>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => setLanguageOpened(!languageOpened)}
        >
          <div className={styles.title}>
            <div className={styles.ico}>
              <LanguagesIcon />
            </div>
            <div className={styles.txt}>Ua/₴</div>
          </div>
        </li>
        <li className={styles.item} onClick={() => setCartOpened(!cartOpened)}>
          <div className={styles.title}>
            <div className={styles.ico}>
              <BasketIcon />
            </div>
            <div className={styles.txt}>Cart</div>
            <div className={styles.count}>1</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Action;
