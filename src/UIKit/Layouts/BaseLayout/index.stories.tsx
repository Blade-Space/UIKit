import * as React from "react";
import { Meta, Story } from "@storybook/react";
import BaseLayout from "./index";
import {Props} from './index'; 

export default {
  component: BaseLayout,
} as Meta;

export const Default: Story<Props> = (args) => <BaseLayout {...args} />;
Default.args = {};


