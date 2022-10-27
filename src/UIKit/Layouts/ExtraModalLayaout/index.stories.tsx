import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ExtraModalLayaout from "./index";
import {ExtraModalLayaoutProps} from './index'; 
import Text from "../../Text";

export default {
  component: ExtraModalLayaout,
} as Meta;

export const Default: Story<ExtraModalLayaoutProps> = (args) => <ExtraModalLayaout {...args} />;
Default.args = {
  children: "",
  items: [{
      type: "item",
      options: {
        children: "Open",
        onClick: () => {console.log("Open")}
      }
    },
    {
      type: "item",
      options: {
        children: "Edit",
        onClick: () => {console.log("Edit")}
      }
    },
    {
      type: "item",
      options: {
        children: "Rename",
        onClick: () => {console.log("Rename")}
      }
    },
    {
      type: "item",
      options: {
        children: "Delete",
        onClick: () => {console.log("Delete")}
      }
    },
    {
      type: "item",
      options: {
        children: "Copy full path",
        onClick: () => {console.log("Copy full path")}
      }
    },
    {
      type: "item",
      options: {
        children: "Info",
        onClick: () => {console.log("Info")}
      }
    },
    {type: "line"},
    {
      type: "item",
      options: {
        children: "Open in VSCode online",
        onClick: () => {console.log("Open in VSCode online")},
        Icon: {
          type: "svg",
          url: "assets\\vscode-small.svg"
        }
      }
    },
    {
      type: "item",
      options: {
        children: "Download on your PC",
        onClick: () => {console.log("Download on your PC")},
        Icon: {
          type: "svg",
          url: "assets\\download-small.svg"
        }
      }
    },
    {
      type: "item",
      options: {
        children: "View in git repo",
        onClick: () => {console.log("View in git repo")},
        Icon: {
          type: "svg",
          url: "assets\\github-small.svg"
        }
      }
    }]
};


export const WithDescription: Story<ExtraModalLayaoutProps> = (args) => <ExtraModalLayaout {...args} />;
WithDescription.args = {
  children: "",
  description: {
    text: "from google fonts",
    link: "/"
  },
  items: [{
      type: "item",
      options: {
        children: "Open",
        onClick: () => {console.log("Open")}
      }
    },
    {
      type: "item",
      options: {
        children: "Edit",
        onClick: () => {console.log("Edit")}
      }
    },
    {
      type: "item",
      options: {
        children: "Rename",
        onClick: () => {console.log("Rename")}
      }
    },
    {
      type: "item",
      options: {
        children: "Delete",
        onClick: () => {console.log("Delete")}
      }
    },
    {
      type: "item",
      options: {
        children: "Copy full path",
        onClick: () => {console.log("Copy full path")}
      }
    },
    {
      type: "item",
      options: {
        children: "Info",
        onClick: () => {console.log("Info")}
      }
    },
    {type: "line"},
    {
      type: "item",
      options: {
        children: "Open in VSCode online",
        onClick: () => {console.log("Open in VSCode online")},
        Icon: {
          type: "svg",
          url: "assets\\vscode-small.svg"
        }
      }
    },
    {
      type: "item",
      options: {
        children: "Download on your PC",
        onClick: () => {console.log("Download on your PC")},
        Icon: {
          type: "svg",
          url: "assets\\download-small.svg"
        }
      }
    },
    {
      type: "item",
      options: {
        children: "View in git repo",
        onClick: () => {console.log("View in git repo")},
        Icon: {
          type: "svg",
          url: "assets\\github-small.svg"
        }
      }
    }]
};

export const WithChildren: Story<ExtraModalLayaoutProps> = (args) => <ExtraModalLayaout {...args} />;
WithChildren.args = {
  children: <div style={{marginBottom: "12px"}}><Text>Надо придумать как передавать шрифт в компонент Text</Text></div>,
  description: {
    text: "from google fonts",
    link: "/"
  }
};


