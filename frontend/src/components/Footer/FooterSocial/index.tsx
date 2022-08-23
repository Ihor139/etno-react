import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterSocial.module.scss";

const FooterSocial = () => {
  return (
    <div className={styles.social}>
      <div className={styles.list}>
        <Link className={styles.item} to="#">
          <div className={styles.ico}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66536 0C2.0927 0 0 2.09464 0 4.66797V11.3346C0 13.9073 2.09464 16 4.66797 16H11.3346C13.9073 16 16 13.9054 16 11.332V4.66536C16 2.0927 13.9054 0 11.332 0H4.66536ZM12.6667 2.66667C13.0347 2.66667 13.3333 2.96533 13.3333 3.33333C13.3333 3.70133 13.0347 4 12.6667 4C12.2987 4 12 3.70133 12 3.33333C12 2.96533 12.2987 2.66667 12.6667 2.66667ZM8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4ZM8 5.33333C7.29276 5.33333 6.61448 5.61428 6.11438 6.11438C5.61428 6.61448 5.33333 7.29276 5.33333 8C5.33333 8.70724 5.61428 9.38552 6.11438 9.88562C6.61448 10.3857 7.29276 10.6667 8 10.6667C8.70724 10.6667 9.38552 10.3857 9.88562 9.88562C10.3857 9.38552 10.6667 8.70724 10.6667 8C10.6667 7.29276 10.3857 6.61448 9.88562 6.11438C9.38552 5.61428 8.70724 5.33333 8 5.33333Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
        <Link className={styles.item} to="#">
          <div className={styles.ico}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.582 0 0 3.60045 0 8.04121C0 12.0725 2.95467 15.4016 6.804 15.9832V10.1721H4.82467V8.05863H6.804V6.65209C6.804 4.32349 7.93267 3.30159 9.858 3.30159C10.78 3.30159 11.268 3.37061 11.4987 3.40143V5.24622H10.1853C9.368 5.24622 9.08267 6.02555 9.08267 6.90338V8.05863H11.478L11.1533 10.1721H9.08267V16C12.9873 15.4679 16 12.1121 16 8.04121C16 3.60045 12.418 0 8 0Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
        <Link className={styles.item} to="#">
          <div className={styles.ico}>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1.77552C18.3007 2.07724 17.5495 2.28028 16.761 2.37186C17.5663 1.90331 18.1838 1.16144 18.4746 0.276871C17.7219 0.710635 16.8874 1.02584 15.9988 1.19622C15.2878 0.460031 14.275 0 13.1541 0C11.0013 0 9.2563 1.69601 9.2563 3.78674C9.2563 4.08349 9.29137 4.37314 9.35714 4.6493C6.11776 4.49169 3.24595 2.98381 1.32264 0.692177C0.987962 1.2516 0.795777 1.90189 0.795777 2.5969C0.795777 3.91027 1.4834 5.06957 2.5291 5.74826C1.89043 5.72838 1.28903 5.558 0.763624 5.27474C0.763624 5.29107 0.763624 5.30598 0.763624 5.32231C0.763624 7.15746 2.10673 8.68806 3.89047 9.03521C3.56382 9.12182 3.21891 9.16797 2.86304 9.16797C2.6124 9.16797 2.3676 9.14383 2.13011 9.10052C2.62628 10.6049 4.06584 11.7003 5.77139 11.7308C4.43779 12.7467 2.75709 13.3523 0.930234 13.3523C0.616015 13.3523 0.30545 13.3345 0 13.299C1.72528 14.3731 3.77355 15 5.97527 15C13.1453 15 17.065 9.22973 17.065 4.22547C17.065 4.06148 17.0613 3.8982 17.054 3.73562C17.8162 3.20105 18.4775 2.53443 19 1.77552Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
        <Link className={styles.item} to="#">
          <div className={styles.ico}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3484 0 14.5455 0ZM13.592 6.89018C13.4975 6.89891 13.4022 6.90473 13.3062 6.90473C12.2189 6.90473 11.2633 6.34618 10.7069 5.50036C10.7069 7.71782 10.7069 10.2415 10.7069 10.2836C10.7069 12.2364 9.12364 13.8189 7.17164 13.8189C5.21964 13.8182 3.63636 12.2349 3.63636 10.2829C3.63636 8.33018 5.21964 6.74764 7.17164 6.74764C7.24582 6.74764 7.31782 6.75418 7.38982 6.75855V8.50109C7.31709 8.49236 7.24655 8.47927 7.17164 8.47927C6.17527 8.47927 5.36727 9.28727 5.36727 10.2836C5.36727 11.28 6.17455 12.088 7.17164 12.088C8.16873 12.088 9.04873 11.3025 9.04873 10.3062C9.04873 10.2662 9.06618 2.18255 9.06618 2.18255H10.7309C10.8873 3.67127 12.0895 4.84655 13.592 4.95418V6.89018Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
        <Link className={styles.item} to="#">
          <div className={styles.ico}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.582 2.186C19.352 1.326 18.674 0.648 17.814 0.418C16.254 2.08616e-07 10 0 10 0C10 0 3.746 2.08616e-07 2.186 0.418C1.326 0.648 0.648 1.326 0.418 2.186C-2.98023e-08 3.746 0 8 0 8C0 8 -2.98023e-08 12.254 0.418 13.814C0.648 14.674 1.326 15.352 2.186 15.582C3.746 16 10 16 10 16C10 16 16.254 16 17.814 15.582C18.675 15.352 19.352 14.674 19.582 13.814C20 12.254 20 8 20 8C20 8 20 3.746 19.582 2.186ZM8 11.464V4.536L14 8L8 11.464Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterSocial;
