import * as React from "react";
import { Meta, Story } from "@storybook/react";
import FileListItem from "./index";
import {IFileListItemProps} from './index'; 

export default {
  component: FileListItem,
} as Meta;

export const Default: Story<IFileListItemProps> = (args) => <div><FileListItem {...args} /></div>;
Default.args = {
    name: "main.go", 
    date: "12 Oct 2022, 11:23 PM", 
    type: "best", 
    size: 3361232,
    backgroundColor: false
};


