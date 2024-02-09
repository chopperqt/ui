import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { ButtonType } from './Button'

export default {
  title: "React-UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Danger = Template.bind({});
export const Text = Template.bind({});

Default.args = {
  label: "Button",
  isDisabled: false,
  isLoading: false,
  icon: undefined
};

Danger.args = {
  label: "Button + Icon",
  isLoading: false,
  isDisabled: false,
  icon: "Settings",
  isDanger: true,
}

Text.args = {
  label: "Text button",
  isLoading: false,
  isDisabled: false,
  icon: 'Settings',
  isDanger: false,
  type: ButtonType.TEXT,
}
