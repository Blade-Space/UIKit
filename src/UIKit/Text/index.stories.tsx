import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Text from "./index";
import {ITextProps} from './index'; 

export default {
  component: Text,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

export const Default: Story<ITextProps> = (args) => <Text {...args} />;
Default.args = {
    children: "Some application text",
    size: "default 16px",
    bold: false,
    italic: false,
    color: 'white',
    onClick: () => {console.log("some action");
    }
};


