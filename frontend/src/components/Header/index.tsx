import React from "react";

import styles from "./Header.module.scss";

import Logo from "./Logo";
import Action from "./Actions/Action";
import Navigation from "./MegaMenu/Navigation";
import SearchDropdown from "./Actions/SearchDropdown";
import ActionDropdown from "./Actions/ActionDropdown";
import MenuDropdown from "./MegaMenu/MenuDropdown";
import ContactDropdown from "./Actions/ContactDropdown";
import LanguageDropdown from "./Actions/LanguageDropdown";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner + " siteContainer"}>
        <div className={styles.content}>
          <div className={styles.menuBurger}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>

          <Navigation />
          <Logo />
          <Action />
        </div>
      </div>

      <ActionDropdown className="search">
        <SearchDropdown />
      </ActionDropdown>

      <ActionDropdown>
        <ContactDropdown />
      </ActionDropdown>

      <ActionDropdown>
        <LanguageDropdown />
      </ActionDropdown>

      <MenuDropdown />
    </header>
  );
};

export default Header;
