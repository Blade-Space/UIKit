import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ExtraModalLayaout from "./index";
import {Props} from './index'; 

export default {
  component: ExtraModalLayaout,
} as Meta;

export const Default: Story<Props> = (args) => <ExtraModalLayaout {...args} />;
Default.args = {};


