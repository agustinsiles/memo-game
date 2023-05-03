import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Title, { IProps } from "./../components/Title/title.component";
import { ColorVariants } from "./../utils/enums";

const meta: Meta = {
  title: "Title",
  component: Title,
  args: {
    children: "This is a title",
  },
};

export default meta;

const Template: StoryFn<IProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

Default.args = {
  variant: ColorVariants.DEFAULT,
};

Primary.args = {
  variant: ColorVariants.PRIMARY,
};

Success.args = {
  variant: ColorVariants.SUCCESS,
};

Danger.args = {
  variant: ColorVariants.DANGER,
};
