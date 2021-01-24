import { useState } from 'react'
import Button from '../Button'
import Form from '../Form'
import NativeSelect from '../NativeSelect'
import { services } from '../../data/routes'

export default function ContactForm({
  extended,
  onFinish = () => {},
  onValuesChange = () => {},
  buttonRight,
  buttonPrimary
}) {

  const send = values => {
    onFinish(values)
  }

  return (
    <div className="max-w-lg mx-auto">
      <Form
        onFinish={send}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="name" label="Name">
          <input className="form-control" placeholder="Oscar Wilde"/>
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input className="form-control" placeholder="Oscar@gmail.com"/>
        </Form.Item>
        {extended && (
          <Form.Item name="option" label="I'm looking for...">
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
        <Form.Item name="message" label="What do you need?">
          <textarea
            className="form-control"
            placeholder="Hi! I'm looking for your help with..."
            rows="6"
          />
        </Form.Item>
        <Form.Item className={buttonRight ? 'text-right' : 'text-center'}>
          <Button
            className="px-14"
            htmlType="submit"
            type={buttonPrimary ? 'primary' : 'blue'}
          >
            Get a quote
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}