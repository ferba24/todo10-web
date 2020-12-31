import Form from './Form';
import Button from '../Button'
import NativeSelect from '../NativeSelect'
import Input from '../Input'

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
    <Form.Item label="Email" name="email" required>
      <Input/>
    </Form.Item>
    <Form.Item label="Mensaje" name="message" required>
      <Input.Textarea/>
    </Form.Item>
    <Form.Item label="Space" name="space" required>
      <NativeSelect>
        <NativeSelect.Option value="12">
          12 GB
        </NativeSelect.Option>
        <NativeSelect.Option value="24">
          24 GB
        </NativeSelect.Option>
      </NativeSelect>
    </Form.Item>
    <Form.Item className="text-center">
      <Button htmlType="submit" type="blue">
        Enviar
      </Button>
    </Form.Item>
  </Form>
)

export const Default = Template.bind({});
Default.args = {
  className: 'max-w-xs mx-auto',
};