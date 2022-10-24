import * as React from "react";
import { Meta, Story } from "@storybook/react";
import RightClickModal from "./index";
import {Props} from './index'; 

export default {
  component: RightClickModal,
} as Meta;

export const Default: Story<Props> = (args) => <RightClickModal {...args} />;
Default.args = {};


