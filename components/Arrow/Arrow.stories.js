import Arrow, { directions, sizes } from './Arrow';

export default {
  title: 'Example/Arrow',
  component: Arrow,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: directions
      }
    },
    size: {
      control: {
        type: 'select',
        options: sizes
      }
    }
  }
};

const Template = (args) => <Arrow {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'middle',
  direction: 'right'
};