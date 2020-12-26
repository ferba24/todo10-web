import Form from './Form';
import Button from '../Button'

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    onValuesChange: { action: 'Values change' },
    onFinish: { action: 'On Finish' }
  }
};

const Template = (args) => (
  <Form {...args}>
    <Form.Item name="email" required>
      <input invalid={true}/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>
)

export const Default = Template.bind({});
Default.args = {
  size: 'middle'
};