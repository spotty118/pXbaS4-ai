import { Typography, Card, Button, Row, Col, Space, List, Spin } from 'antd'
import { CheckCircleOutlined, UpOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function UpgradePlanPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const { data: plans, isLoading } = Api.plan.findMany.useQuery({})
  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation()

  const handleUpgrade = async (planId: string) => {
    try {
      const paymentLink = await createPaymentLink({ productId: planId })
      window.location.href = paymentLink.url
    } catch (error) {
      console.error('Error creating payment link:', error)
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Space
          size="large"
          direction="vertical"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <Spin size="large" />
          <Text>Loading subscription plans...</Text>
        </Space>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Upgrade Your Plan</Title>
        <Paragraph>
          Choose a subscription plan that best fits your needs and unlock more
          features for your applications.
        </Paragraph>

        <Row gutter={[16, 16]} justify="center">
          {plans?.map(plan => (
            <Col xs={24} sm={12} md={8} key={plan.id}>
              <Card
                title={<Title level={3}>{plan.name}</Title>}
                extra={<Text strong>${plan.price?.toString()}/month</Text>}
                actions={[
                  <Button
                    type="primary"
                    icon={<UpOutlined />}
                    onClick={() => handleUpgrade(plan.id)}
                    key="upgrade"
                  >
                    Upgrade
                  </Button>,
                ]}
              >
                <List
                  dataSource={plan.benefits?.split(',') || []}
                  renderItem={benefit => (
                    <List.Item>
                      <Space>
                        <CheckCircleOutlined style={{ color: '#52c41a' }} />
                        <Text>{benefit.trim()}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Paragraph>
          By upgrading your plan, you agree to our terms of service and will be
          redirected to Stripe for secure payment processing.
        </Paragraph>
      </Space>
    </PageLayout>
  )
}
