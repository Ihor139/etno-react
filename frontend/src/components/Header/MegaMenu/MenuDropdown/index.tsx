import React from "react";
import styles from "./MenuDropdown.module.scss";
import MenuItem from "./MenuItem";

const menuCategory = [
  {
    id: 0,
    dataTitle: "women",
    image: "./media/img/menu-1.jpg",
    list: [
      { id: 0, name: "Вишиті сукні", image: "./media/img/menu-1.jpg" },
      { id: 1, name: "Жіночі вишиванки", image: "./media/img/menu-2.jpg" },
      { id: 2, name: "Конструктор вишиванки", image: "./media/img/menu-3.jpg" },
      { id: 3, name: "Піжами", image: "./media/img/menu-4.jpg" },
      { id: 4, name: "Світшоти та светри", image: "./media/img/menu-2.jpg" },
      { id: 5, name: "Футболки", image: "./media/img/menu-1.jpg" },
      { id: 6, name: "Пальта & куртки ", image: "./media/img/menu-4.jpg" },
    ],
  },
  {
    id: 1,
    dataTitle: "men",
    image: "./media/img/menu-2.jpg",
    list: [
      { id: 0, name: "Чоловічі вишиванки", image: "./media/img/menu-1.jpg" },
    ],
  },
  {
    id: 2,
    dataTitle: "children",
    image: "./media/img/menu-3.jpg",
    list: [
      {
        id: 0,
        name: "Вишиванка для хлопчика",
        image: "./media/img/menu-1.jpg",
      },
      {
        id: 1,
        name: "Вишиванки для дівчаток",
        image: "./media/img/menu-2.jpg",
      },
      { id: 2, name: "Дитячі піжами", image: "./media/img/menu-3.jpg" },
    ],
  },
];

const MenuDropdown: React.FC = () => {
  return (
    <>
      {menuCategory?.map((category) => (
        <div
          key={category.id}
          className={styles.menuDropdown}
          data-menu={category.dataTitle}
        >
          <div className={styles.inner}>
            {category.list?.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuDropdown;
