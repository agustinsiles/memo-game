import React from "react";
import { Meta, Story, StoryFn } from "@storybook/react";
import Button, {
  ButtonSizes,
  ButtonVariants,
  IProps,
} from "./../components/Button/button.component";

const meta: Meta = {
  title: "Button",
  component: Button,
  args: {
    size: ButtonSizes.MD,
    classNames: "",
    children: "Click me",
  },
};

export default meta;

const Template: StoryFn<IProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

Default.args = {
  variant: ButtonVariants.DEFAULT,
};

Primary.args = {
  variant: ButtonVariants.PRIMARY,
};

Success.args = {
  variant: ButtonVariants.SUCCESS,
};

Danger.args = {
  variant: ButtonVariants.DANGER,
};
