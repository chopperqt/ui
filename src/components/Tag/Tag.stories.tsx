import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TagComponent from "./Tag";

export default {
  title: "React-UI/Tag",
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>;

const Template: ComponentStory<typeof TagComponent> = (args) => (
  <TagComponent {...args} />
);

export const Tag = Template.bind({});

Tag.args = {
  text: "Tag example",
  isInteractive: false,
};
