import * as React from "react";
import { Meta, Story } from "@storybook/react";
import SmallDescriptonLink from "./index";
import {SmallDescriptonLinkProps} from './index'; 

export default {
  component: SmallDescriptonLink,
} as Meta;

export const Default: Story<SmallDescriptonLinkProps> = (args) => <SmallDescriptonLink {...args} />;
Default.args = {
  link: "https://github.com/Blade-Space/UIKit"
};



