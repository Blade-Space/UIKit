import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Path from "./index";
import {PathProps} from './index'; 

export default {
  component: Path,
} as Meta;

export const Default: Story<PathProps> = (args) => <Path {...args} />;
Default.args = {
  type: "folder",
  path: "root/users/nik19ta/server-os"
};


