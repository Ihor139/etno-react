import React from "react";
import styles from "./ActionDropdown.module.scss";

type ActionDropdownProps = {
  children?: React.ReactNode;
  className?: string;
};

const ActionDropdown: React.FC<ActionDropdownProps> = ({
  children,
  className,
}) => {
  return (
    <div className={styles.actionDropdown + " " + (className === 'search' ? styles.search : "")}>
      {children}
    </div>
  );
};

export default ActionDropdown;
