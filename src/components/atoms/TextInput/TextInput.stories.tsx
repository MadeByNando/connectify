import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Atoms/TextInput",
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Enter text...",
    onChange: () => {},
  },
};
