import React from "react";

import Anchor from "./Anchor";

export default {
  component: Anchor,
  title: "Anchor",
};

const Template = (args) => <Anchor {...args} />;

export const ExampleAnchor = Template.bind({});

ExampleAnchor.args = {
  href: "https://www.example.com",
  children: "Example",
};
