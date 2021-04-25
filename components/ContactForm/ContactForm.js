import Button from '../Button'
import Form from '../Form'
import NativeSelect from '../NativeSelect'
import { services } from '../../data/routes'
import ReCAPTCHA from 'react-google-recaptcha'
import { RECAPTCHA_SITE_KEY } from '../../data/constants'
import { useState } from 'react'

export default function ContactForm({
  extended,
  onFinish = () => {},
  onValuesChange = () => {},
  buttonRight,
  buttonPrimary,
  buttonLabel = 'Get a Quote',
  sending
}) {
  
  const [validCaptcha, setValidCaptcha] = useState(false)

  function validateCaptchaAndFinish(values) {
    if(!validCaptcha) {
      alert('You must click the captcha checkbox')
      return
    }
    onFinish(values)
  }

  return (
    <div className="max-w-lg mx-auto">
      <Form
        onFinish={validateCaptchaAndFinish}
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
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={value => setValidCaptcha(Boolean(value))}
        />
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