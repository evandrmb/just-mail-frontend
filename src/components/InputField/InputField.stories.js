import React from "react";

import TextInput from "./InputField";

export default {
  component: TextInput,
  title: "TextInput",
};

const Template = (args) => <TextInput {...args} />;

export const EmailInput = Template.bind({});

EmailInput.args = {
  label: "E-mail",
  type: "email",
};
