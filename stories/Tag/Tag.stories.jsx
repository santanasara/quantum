import Tag from '../../components/Tag';

const Template = args => {
  const { children: Component, ...rest } = args;
  return <Tag {...rest}>{Component}</Tag>;
};

export const Default = Template.bind({});

export const Skin = Template.bind({});
Skin.args = {
  skin: 'success',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Stroked = Template.bind({});
Stroked.args = {
  stroked: true,
};
export const Bold = Template.bind({});
Bold.args = {
  bold: true,
};
export const Size = Template.bind({});
Size.args = {
  size: 'large',
};
