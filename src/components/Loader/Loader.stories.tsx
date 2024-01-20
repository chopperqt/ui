import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoaderComponent from "./Loader";

export default {
  title: "React-UI/Loader",
  component: LoaderComponent,
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = (args) => <LoaderComponent {...args} />;

export const Loader = Template.bind({});

Loader.args = {
  isLoading: true,
}
