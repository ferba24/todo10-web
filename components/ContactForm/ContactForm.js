import Button from '../Button'
import Form from '../Form'
import NativeSelect from '../NativeSelect'
import { services } from '../../data/routes'

export default function ContactForm({
  extended,
  onFinish = () => {},
  onValuesChange = () => {},
  buttonRight,
  buttonPrimary,
  buttonLabel = 'Get a Quote',
  sending
}) {

  return (
    <div className="max-w-lg mx-auto">
      <Form
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        {extended && (
            <Form.Item name="option" label="I'm looking for..." required>
              <NativeSelect className="w-full">
                {services.map(service => (
                    <NativeSelect.Option
                        key={service.path}
                        value={service.label}
                    >
                      <div className="flex items-center">
                        <img
                            className="w-5 mr-3"
                            src={service.icon}
                        />
                        {service.label}
                      </div>
                    </NativeSelect.Option>
                ))}
              </NativeSelect>
            </Form.Item>
        )}
        <Form.Item name="name" label="Name" required>
          <input className="form-control" placeholder="Your name"/>
        </Form.Item>
        <Form.Item name="email" label="Email" required>
          <input className="form-control" placeholder="Your email"/>
        </Form.Item>
        <Form.Item name="message" label="How we can help you?">
          <textarea
            className="form-control"
            placeholder="Hi! I'm looking for your help with..."
            rows="6"
          />
        </Form.Item>
        <Form.Item className={buttonRight ? 'text-right' : 'text-center'}>
          <Button
            disabled={sending}
            className="px-14"
            htmlType="submit"
            type={buttonPrimary ? 'primary' : 'blue'}
          >
            {buttonLabel}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}