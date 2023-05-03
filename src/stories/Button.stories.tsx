import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, {
  ButtonSizes,
  IProps,
} from "./../components/Button/button.component";
import { ColorVariants } from "@/utils/enums";

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
