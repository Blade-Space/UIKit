import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown from "./index";
import {IDropdownProps} from './index'; 

export default {
  component: Dropdown,
} as Meta;

export const Default: Story<IDropdownProps> = (args) => <Dropdown {...args} />;
Default.args = {
  defaultValue: "default",
  onChange: (value) => {console.log("value: "+value+" was changed")},
  width: 120,
  items: [{
      type: "item",
      options: {
        children: "option 1",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 2",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 3",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 4",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 5",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 6",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 7",
        onClick: () => {},
      }
    },
    {
      type: "item",
      options: {
        children: "option 8",
        onClick: () => {},
      }
    },
    {
      type: "item",
      options: {
        children: "option 9",
        onClick: () => {},
        }
    }],
};

export const WithDescription: Story<IDropdownProps> = (args) => <Dropdown {...args} />;
WithDescription.args = {
  defaultValue: "default",
  description: {
    text: "from google fonts",
    link: "/"
  },
  onChange: (value) => {console.log("value: "+value+" was changed")},
  width: 230,
  items: [{
      type: "item",
      options: {
        children: "option 1",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 2",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 3",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 4",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 5",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 6",
        onClick: () => {}
      }
    },
    {
      type: "item",
      options: {
        children: "option 7",
        onClick: () => {},
      }
    },
    {
      type: "item",
      options: {
        children: "option 8",
        onClick: () => {},
      }
    },
    {
      type: "item",
      options: {
        children: "option 9",
        onClick: () => {},
        }
    }],
};


