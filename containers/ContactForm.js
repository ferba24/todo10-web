import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import NativeSelect from '../components/NativeSelect'

export default function ContactForm({extended, onFinish, onValuesChange}) {

  return (
    <div className="max-w-lg mx-auto">
      <Form
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="name" label="Name">
          <Input placeholder="Oscar Wilde"/>
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Oscar@gmail.com"/>
        </Form.Item>
        {extended && (
          <Form.Item name="option" label="I'm looking for...">
            <NativeSelect/>
          </Form.Item>
        )}
        <Form.Item name="message" label="What do you need?">
          <Input.Textarea
            placeholder="Hi! I'm looking for your help with..."
          />
        </Form.Item>
        <Form.Item className="text-center">
          <Button
            className="px-14"
            htmlType="submit"
            type="blue"
          >
            Get a quote
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}