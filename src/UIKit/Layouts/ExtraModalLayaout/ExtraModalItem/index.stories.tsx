import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ExtraModalLayaout from "./index";
import {ExtraModalItemProps} from './index'; 

export default {
  component: ExtraModalLayaout,
} as Meta;

export const Default: Story<ExtraModalItemProps> = (args) => <ExtraModalLayaout {...args} />;
Default.args = {
  children: "Open",
};

export const WithIcon: Story<ExtraModalItemProps> = (args) => <ExtraModalLayaout {...args} />;
WithIcon.args = {
  children: "Open in VSCode online",
  Icon: { 
    type: "svg",
    url: "assets\\vscode-small.svg"
  }
};


