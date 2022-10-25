import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Error from "./index";
import {Props} from './index'; 

export default {
  component: Error,
} as Meta;

export const BackError: Story<Props> = (args) => <Error {...args} />;
BackError.args = {
  isFrontError: false,
  module: "wwf",
  file: "handler.go",
  string: 10,
  children: "TypeError: Неправильный тип данных, который почему-то вызывал ошибку на русском языке"
};

export const FrontError: Story<Props> = (args) => <Error {...args} />;
FrontError.args = {
  isFrontError: true,
  component: "ErrorInfoString",
  file: "index.css",
  string: 15,
  children: "TypeError: Неправильный тип данных, который почему-то вызывал ошибку на русском языке"
};


