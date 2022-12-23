import React, {useState} from "react";
import { Meta, Story } from "@storybook/react";
import Input from "./index";
import {IInputProps} from './index'; 


export default {
  component: Input,
} as Meta;

export const Default: Story<IInputProps> = (args) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {setValue(inputValue);}
  return <Input 
          id={args.id} 
          value={localValue} 
          setValue={onChangeInput} 
          isSuccess={args.isSuccess}
          placeholder={args.placeholder}  />
};
Default.args = {
  placeholder: "inactive",
  id: "1",
  isSuccess: "none"
};

export const Success: Story<IInputProps> = (args) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {setValue(inputValue);}
  return <Input 
          id={args.id} 
          value={localValue} 
          setValue={onChangeInput} 
          isSuccess={args.isSuccess}
          placeholder={args.placeholder}  />
};
Success.args = {
  placeholder: "success",
  id: "1",
  isSuccess: "success"
};

export const Warning: Story<IInputProps> = (args) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {setValue(inputValue);}
  return <Input 
          id={args.id} 
          value={localValue} 
          setValue={onChangeInput} 
          isSuccess={args.isSuccess}
          placeholder={args.placeholder}  />
};
Warning.args = {
  placeholder: "warning",
  id: "1",
  isSuccess: "warning"
};

