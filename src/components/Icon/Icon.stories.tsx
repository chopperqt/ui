import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

export default {
  title: "React-UI/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon{...args} />;

export const Settings = Template.bind({});
export const Close = Template.bind({});
export const Loading = Template.bind({});

Settings.args = {
  icon: "Settings",
};

Close.args = {
  icon: "Close",
}

Loading.args = {
  icon: "Loading",
}
