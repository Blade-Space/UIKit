import * as React from "react";
import { Meta, Story } from "@storybook/react";
import SystemIcon from "./index";
import {Props} from './index'; 

export default {
  component: SystemIcon,
} as Meta;

export const Default: Story<Props> = (args) => <SystemIcon {...args} />;
Default.args = {};


