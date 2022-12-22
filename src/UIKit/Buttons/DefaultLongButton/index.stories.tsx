import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DefaultLongButton from "./index";
import {IDefaultLongButtonProps} from './index'; 

export default {
  component: DefaultLongButton,
} as Meta;

export const Success: Story<IDefaultLongButtonProps> = (args) => <DefaultLongButton {...args} />;
Success.args = {
    children: 'Click me to Success',
    success: true,
    onClick: () => {}
};

export const Interrupt: Story<IDefaultLongButtonProps> = (args) => <DefaultLongButton {...args} />;
Interrupt.args = {
    children: 'Click me to Interrupt',
    success: false,
    onClick: () => {}
};


