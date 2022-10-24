import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DefaultLongButton from "./index";
import {Props} from './index'; 

export default {
  component: DefaultLongButton,
} as Meta;

export const Default: Story<Props> = (args) => <DefaultLongButton {...args} />;
Default.args = {};


