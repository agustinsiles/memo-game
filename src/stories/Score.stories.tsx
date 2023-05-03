import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Score, { IProps } from "./../components/Score/score.component";

const meta: Meta = {
  title: "Score",
  component: Score,
  args: {
    score: 5,
  },
};

export default meta;

const Template: StoryFn<IProps> = (args) => <Score {...args} />;

export const Default = Template.bind({});
