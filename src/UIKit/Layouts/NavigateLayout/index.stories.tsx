import * as React from "react";
import { Meta, Story } from "@storybook/react";
import NavigateLayout from "./index";
import {Props} from './index'; 

export default {
  component: NavigateLayout,
} as Meta;

export const Default: Story<Props> = (args) => <NavigateLayout {...args} />;
Default.args = {};


