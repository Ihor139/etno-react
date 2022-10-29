import { Status } from "../../@types";

export interface NavigationSliceState {
  menuItems: Item[];
  status: Status
}

export type Menu = {
  id: number;
  dataImage: string;
  title: string;
};

export type Item = {
  id: number;
  dataMenu: string;
  title: string;
  link: string;
  dataImage: string;
  submenu: Menu[];
};
