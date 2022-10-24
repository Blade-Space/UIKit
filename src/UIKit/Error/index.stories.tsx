import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Error from "./index";
import {Props} from './index'; 

export default {
  component: Error,
} as Meta;

export const Default: Story<Props> = (args) => <Error {...args} />;
Default.args = {};


