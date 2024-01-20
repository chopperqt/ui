import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputComponent from "./Input";

export default {
  title: "React-UI/Input",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent{...args} />;

export const Input = Template.bind({});

Input.args = {
}
