import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DropdownIcon from "./index";
import {IDropdownIconProps} from './index'; 

export default {
  component: DropdownIcon,
} as Meta;

export const Default: Story<IDropdownIconProps> = (args) => <DropdownIcon {...args} />;
Default.args = {
  isActive: false
};


