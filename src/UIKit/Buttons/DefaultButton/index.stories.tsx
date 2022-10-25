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
    success: true,
    typical: false,
    onClick: () => {}
};

export const Success: Story<Props> = (args) => <DefaultButton {...args} />;
Success.args = {
    children: 'Click me',
    success: true,
    typical: true,
    onClick: () => {}
};

export const Interrupt: Story<Props> = (args) => <DefaultButton {...args} />;
Interrupt.args = {
    children: 'Click me',
    success: false,
    typical: true,
    onClick: () => {}
};


