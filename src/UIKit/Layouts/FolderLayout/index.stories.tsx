import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FolderLayout from "./index";
import {FolderLayoutProps} from './index'; 

export default {
  component: FolderLayout,
} as Meta;

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const files = [
  {name: "main.go", date: "01 Sep 2022, 10:20 PM" , type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open main.go")}},
  {name: "folder", date: "24 Sep 2022, 12:24 PM", type: "folder", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open folder")}},
  {name: "App.ts", date: "14 Oct 2022, 11:12 AM", type: "component", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open App.ts")}},
  {name: "Component.ts", date: "01 May 2022, 11:23 PM", type: "component", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open Component.ts")}},
  {name: "api", date: "18 Apr 2022, 08:12 PM", type: "folder", size:  getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open api")}},
  {name: "src", date: "04 Oct 2022, 07:23 AM", type: "folder", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open src")}},
  {name: "hentai 1000gb", date: "25 Apr 2021, 07:45 PM", type: "folder", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open hentai 1000gb")}},
  {name: "file.go", date: "14 Oct 2022, 03:26 PM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open file.go")}},
  {name: "blop.go", date: "30 Sep 2022, 12:56 AM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open blop.go")}},
  {name: "wwf.go", date: "02 Oct 2022, 11:34 PM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open wwf.go")}},
  {name: "wwd.go", date: "01 May 2022, 02:21 PM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open wwd.go")}},
  {name: "wwz.go", date: "25 Sep 2022, 02:53 AM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open wwz.go")}},
  {name: "main.ts", date: "26 Oct 2021, 12:11 PM", type: "component", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open main.ts")}},
  {name: "golang_page.ts", date: "23 Sep 2022, 09:22 PM", type: "component", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open golang_page.ts")}},
  {name: "main", date: "14 Apr 2022, 01:33 PM", type: "folder", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open main")}},
  {name: "main2.go", date: "15 May 2022, 10:44 AM", type: "best", size: getRandomArbitrary(1024, 10000000), onOpen: () => {alert("open main2.go")}},
]

export const Default: Story<FolderLayoutProps> = (args) => <FolderLayout {...args} />;
Default.args = {
    biggestValueOfTheLayer: {
        value: 1,
        setValue: () => {}
    },
    scaling: true,
    draggable: true,
    onClose: () => {},
    onHide: () => {},
    openPosition: {x: 0, y: 0},
    title: "Folder title 🧘🏻‍♂️",
    path: "root/users/nik19ta/server-os",
    files: files
};


