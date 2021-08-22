import React from "react";

import WriteButton from "./WriteButton";

export default {
  component: WriteButton,
  title: "WriteButton",
};

const Template = (args) => <WriteButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  onclick: () => {
    console.log("It's expected to do something");
  },
};
