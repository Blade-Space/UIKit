import * as React from "react";
import { Meta, Story } from "@storybook/react";
import HeaderCircle from "./index";
import {IHeaderCircleProps} from './index'; 

export default {
  component: HeaderCircle,
} as Meta;

export const Close: Story<IHeaderCircleProps> = (args) => <HeaderCircle {...args} />;
Close.args = {
  color: "red",
  onClick: () => {alert("Close clicked")}
};
export const FullScreen: Story<IHeaderCircleProps> = (args) => <HeaderCircle {...args} />;
FullScreen.args = {
  color: "green",
  onClick: () => {alert("FullScreen clicked")}
};
export const Hide: Story<IHeaderCircleProps> = (args) => <HeaderCircle {...args} />;
Hide.args = {
  color: "white",
  onClick: () => {alert("Hide clicked")}
};


