import * as React from "react";
import { Meta, Story } from "@storybook/react";
import BaseLayout from "./index";
import {BaseLayoutProps} from './index'; 

import Text from '../../Text';

export default {
  component: BaseLayout,
} as Meta;

export const Default: Story<BaseLayoutProps> = (args) => <BaseLayout {...args} />;
Default.args = {
  onClose: () => {alert("close")},
  size: {_width: "700px", _height: "300px"},
  title: "Default Layout",
  children: <Text>Hello world</Text>

};