import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "React-UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});
export const Icon = Template.bind({});
export const Danger = Template.bind({})

Default.args = {
  label: "Button",
  isDisabled: false,
  isLoading: false,
  icon: undefined
};

Disabled.args = {
  label: "Disabled",
  isDisabled: false,
  isLoading: false,
}

Loading.args = {
  label: "Loaded",
  isLoading: true,
  isDisabled: false,
};

Icon.args = {
  label: "Button + Icon",
  isLoading: false,
  isDisabled: false,
  icon: "Settings"
}

Danger.args = {
  label: "Button + Icon",
  isLoading: false,
  isDisabled: false,
  icon: "Settings",
  isDanger: true,
}
