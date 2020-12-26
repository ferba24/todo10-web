import NativeSelect from './NativeSelect';

export default {
  title: 'Example/NativeSelect',
  component: NativeSelect,
};

const Template = (args) =>(
  <NativeSelect {...args}>
    <NativeSelect.Option value="a">
      Option 1
    </NativeSelect.Option>
    <NativeSelect.Option value="b">
      Option 2
    </NativeSelect.Option>
  </NativeSelect>
);

export const Default = Template.bind({});
Default.args = {
};