import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown from "./index";
import {Props} from './index'; 

export default {
  component: Dropdown,
} as Meta;

export const Default: Story<Props> = (args) => <Dropdown {...args} />;
Default.args = {};


