import StringBox from "./StringBox";
import { fn } from "@storybook/test";

export default {
  title: "Material UI/StringBox",
  component: StringBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
  args: { onClick: fn() },
};

export const First = {
  args: {
    number: 1,
    label: "First",
  },
};
