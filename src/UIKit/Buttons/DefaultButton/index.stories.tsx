import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DefaultButton from "./index";
import {Props} from './index'; 

export default {
  component: DefaultButton,
} as Meta;

export const Default: Story<Props> = (args) => <DefaultButton {...args} />;
Default.args = {
    children: 'Click me',
    color: 'one',
};


