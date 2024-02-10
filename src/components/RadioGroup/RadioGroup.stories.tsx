import React from "react";
import { ComponentStory } from "@storybook/react";

import RadioGroupComponent from "./RadioGroup";


export default {
  title: "React-UI/RadioGroup",
  component: RadioGroupComponent,
}

const Template: ComponentStory<typeof RadioGroupComponent> = (args) => <RadioGroupComponent {...args} />;

export const RadioGroup = Template.bind({});

RadioGroup.args = {
  label: 'Radio Group',
  options: [
    {
      label: 'Cat',
    },
    {
      label: 'Dog',
    },
    {
      label: 'Lion',
    }
  ]
}
