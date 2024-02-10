import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioComponent from "./Radio";

export default {
  title: "React-UI/Radio",
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

const Template: ComponentStory<typeof RadioComponent> = (args) => (
  <RadioComponent {...args} />
);

export const Radio = Template.bind({});

Radio.args = {
  isChecked: true,
  label: "Radio button",
  name: "radio",
}
