import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ChooseModal from "./index";
import {Props} from './index'; 

export default {
  component: ChooseModal,
} as Meta;

export const Default: Story<Props> = (args) => <ChooseModal {...args} />;
Default.args = {
  message: "ssh_key worker",
  onSuccess: {
    handler: () => {alert("onSuccess")},
    text: "continue"
},
  onInterrupt: {
    handler: () => {alert("onInterrupt")},
    text: "interrupt"
}
};


