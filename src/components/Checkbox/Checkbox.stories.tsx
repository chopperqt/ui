import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxComponent from "./Checkbox";

export default {
  title: "React-UI/Checkbox",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => <CheckboxComponent {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  isChecked: true,
  label: "Checkbox",
  name: "Checkbox",
}
