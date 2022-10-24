import * as React from "react";
import { Meta, Story } from "@storybook/react";
import InstallModal from "./index";
import {Props} from './index'; 

export default {
  component: InstallModal,
} as Meta;

export const Default: Story<Props> = (args) => <InstallModal {...args} />;
Default.args = {};


