import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ErrorInfoString from "./index";
import {Props} from './index'; 

export default {
  component: ErrorInfoString,
} as Meta;

export const Default: Story<Props> = (args) => <ErrorInfoString {...args} />;
Default.args = {
  title: "Module:",
  children: "wwf"
};


