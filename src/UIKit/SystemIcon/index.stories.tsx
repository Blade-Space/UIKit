import * as React from "react";
import { Meta, Story } from "@storybook/react";
import SystemIcon from "./index";
import {ISystemIconProps} from './index'; 

export default {
  component: SystemIcon,
} as Meta;

export const Default: Story<ISystemIconProps> = (args) => <SystemIcon {...args} />;
Default.args = {
  icon: "assets\\systemIcons\\runfile.svg"
};


