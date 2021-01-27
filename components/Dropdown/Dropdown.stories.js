import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
  <Dropdown {...args}/>
)

export const Default = Template.bind({});
Default.args = {
  overlay: "Menu",
  children: 'Click me'
};

export const OpenOnHover = Template.bind({});
OpenOnHover.args = {
  overlay: "Menu",
  children: 'Hover me',
  openOnHover: true
};

export const RenderProps = Template.bind({});
RenderProps.args = {
  children: (open, toggle) => (
    <>
      <div onClick={toggle}>Click me</div>
      {open ? 'Menu' : null}
    </>
  ),
};