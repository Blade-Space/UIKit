import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Text from "./index";
import {Props} from './index'; 

export default {
  component: Text,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

export const Default: Story<Props> = (args) => <Text {...args} />;
Default.args = {
    children: "Some application text",
    size: "default 16px",
    bold: false,
    italic: false,
    pointer: true,
    color: 'white',
    onClick: () => {console.log("some action");
    }
};


