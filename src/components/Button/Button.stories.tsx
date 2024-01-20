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

Default.args = {
  label: "Button",
  isDisabled: false,
  isLoading: false,
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
