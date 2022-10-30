import * as React from "react";
import { Meta, Story } from "@storybook/react";
import SystemIcon from "./index";
import {SystemIconProps} from './index'; 

export default {
  component: SystemIcon,
} as Meta;

export const Default: Story<SystemIconProps> = (args) => <SystemIcon {...args} />;
Default.args = {
  icon: "assets\\systemIcons\\runfile.svg"
};


