import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PrimaryButton from "./index";
import {Props} from './index'; 

export default {
  component: PrimaryButton,
} as Meta;

export const Default: Story<Props> = (args) => <PrimaryButton {...args} />;
Default.args = {};


