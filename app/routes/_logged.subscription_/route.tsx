import React from 'react'
import { Typography, Card, Button, List, Spin, message } from 'antd'
import {
  CrownOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SubscriptionManagementPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { data: subscription, isLoading: isLoadingSubscription } =
    Api.subscription.findFirst.useQuery({
      where: { userId: user?.id },
      include: { plan: true },
    })

  const { data: plans, isLoading: isLoadingPlans } = Api.plan.findMany.useQuery(
    {},
  )

  const { mutateAsync: createPaymentLink } =
    Api.billing.createPaymentLink.useMutation()

  const handleUpgrade = async (planId: string) => {
    try {
      const result = await createPaymentLink({ productId: planId })
      if (typeof result === 'string') {
        window.location.href = result
      } else if (result && typeof result === 'object' && 'url' in result) {
        window.location.href = result.url
      } else {
        throw new Error('Invalid payment link format')
      }
    } catch (error) {
      message.error('Failed to create payment link. Please try again.')
    }
  }

  if (isLoadingSubscription || isLoadingPlans) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Subscription Management</Title>
      <Paragraph>
        Manage your subscription and view your current benefits.
      </Paragraph>

      <Card title="Current Subscription" style={{ marginBottom: '2rem' }}>
        {subscription ? (
          <>
            <Text strong>Plan: </Text>
            <Text>{subscription.plan?.name}</Text>
            <br />
            <Text strong>Status: </Text>
            <Text>{subscription.status}</Text>
            <br />
            <Text strong>Start Date: </Text>
            <Text>{subscription.startDate}</Text>
            <br />
            <Text strong>End Date: </Text>
            <Text>{subscription.endDate}</Text>
            <br />
            <Text strong>Benefits: </Text>
            <Paragraph>{subscription.plan?.benefits}</Paragraph>
          </>
        ) : (
          <Text>You are currently on the free tier.</Text>
        )}
      </Card>

      <Title level={3}>Available Plans</Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        dataSource={plans}
        renderItem={plan => (
          <List.Item>
            <Card
              title={
                <span>
                  <CrownOutlined style={{ marginRight: '8px' }} />
                  {plan.name}
                </span>
              }
              actions={[
                <Button
                  key="upgrade"
                  type="primary"
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={subscription?.planId === plan.id}
                >
                  {subscription?.planId === plan.id
                    ? 'Current Plan'
                    : 'Upgrade'}
                </Button>,
              ]}
            >
              <Text strong>
                <DollarOutlined /> Price: ${plan.price?.toString()}
              </Text>
              <br />
              <Text strong>Benefits:</Text>
              <ul>
                {plan.benefits?.split(',').map((benefit, index) => (
                  <li key={index}>
                    <CheckCircleOutlined
                      style={{ color: '#52c41a', marginRight: '8px' }}
                    />
                    {benefit.trim()}
                  </li>
                ))}
              </ul>
            </Card>
          </List.Item>
        )}
      />

      {subscription && (
        <Button
          type="link"
          onClick={() => navigate('/upgrade')}
          style={{ marginTop: '1rem' }}
        >
          Manage Payment Details
        </Button>
      )}
    </PageLayout>
  )
}
