import * as React from "react";
import { Meta, Story } from "@storybook/react";
import BaseLayoutHeader from "./index";
import {BaseLayoutHeaderProps} from './index'; 

export default {
  component: BaseLayoutHeader,
} as Meta;

export const Default: Story<BaseLayoutHeaderProps> = (args) => <BaseLayoutHeader {...args} />;
Default.args = {
  onClose: () => alert("willClose"),
  onScale: () => alert("willScale"),
  onHide: () => alert("willHide"),
  title: "ssh_key worker api loading...",
  width: "710px",
  onDrag: () => alert("drag")
};


