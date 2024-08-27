import DropDown from "./DropDown";

export default {
  title: "Material UI/DropDown",
  component: DropDown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export const Default = {
  args: {
    text: "Text",
  },
};

export const EmptyContent = {
  args: {
    helperText: "Filled required",
  },
};

export const Disabled = {
  args: {
    helperText: "Disabled in XXX",
    disabled: true,
  },
};

export const Error = {
  args: {
    errorState: true,
    textError: "*ERROR*",
    helperText: "Error in XXX",
  },
};
