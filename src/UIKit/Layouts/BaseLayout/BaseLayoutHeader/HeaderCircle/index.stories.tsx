import * as React from "react";
import { Meta, Story } from "@storybook/react";
import HeaderCircle from "./index";
import {HeaderCircleProps} from './index'; 

export default {
  component: HeaderCircle,
} as Meta;

export const Close: Story<HeaderCircleProps> = (args) => <HeaderCircle {...args} />;
Close.args = {
  color: "red",
  onClick: () => {alert("Close clicked")}
};
export const FullScreen: Story<HeaderCircleProps> = (args) => <HeaderCircle {...args} />;
FullScreen.args = {
  color: "green",
  onClick: () => {alert("FullScreen clicked")}
};
export const Hide: Story<HeaderCircleProps> = (args) => <HeaderCircle {...args} />;
Hide.args = {
  color: "white",
  onClick: () => {alert("Hide clicked")}
};


