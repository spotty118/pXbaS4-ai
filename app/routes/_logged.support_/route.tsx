import React from 'react'
import { Typography, Space, Button, Input, Form, Card } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useNavigate } from '@remix-run/react'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HelpSupportPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { mutateAsync: createSupportTicket } =
    Api.supportTicket.create.useMutation()

  const onFinish = async (values: { subject: string; message: string }) => {
    try {
      await createSupportTicket({
        data: {
          subject: values.subject,
          message: values.message,
          status: 'OPEN',
          userId: user?.id,
        },
      })
      // Optionally, you can show a success message or redirect the user
      navigate('/applications')
    } catch (error) {
      console.error('Failed to create support ticket:', error)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Help and Support</Title>
        <Paragraph>
          Welcome to our Help and Support center. Here you can find answers to
          frequently asked questions and contact our support team if you need
          further assistance.
        </Paragraph>

        <Card
          title={
            <>
              <MessageOutlined /> Contact Support
            </>
          }
        >
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </PageLayout>
  )
}
