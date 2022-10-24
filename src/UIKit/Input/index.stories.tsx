import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./index";
import {Props} from './index'; 

export default {
  component: Input,
} as Meta;

export const Default: Story<Props> = (args) => <Input {...args} />;
Default.args = {};


