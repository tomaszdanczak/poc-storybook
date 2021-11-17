import Button from "../components/Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

// export const Red = () => <Button label="Press me" backgroundColor="red" />;

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Press me sdskds salkldajslkdas asd adsasdjhls dsdasd",
  size: "md",
};
