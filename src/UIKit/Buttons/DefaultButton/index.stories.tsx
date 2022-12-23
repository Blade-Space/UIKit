import * as React from "react";
import { Meta, Story } from "@storybook/react";
import DefaultButton from "./index";
import {IDefaultButtonProps} from './index'; 

export default {
  component: DefaultButton,
} as Meta;

export const Default: Story<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Default.args = {
    children: 'Click me',
    success: true,
    typical: false,
    onClick: () => {}
};

export const Success: Story<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Success.args = {
    children: 'Click me',
    success: true,
    typical: true,
    onClick: () => {}
};

export const Interrupt: Story<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Interrupt.args = {
    children: 'Click me',
    success: false,
    typical: true,
    onClick: () => {}
};


