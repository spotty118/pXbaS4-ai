import React from 'react'
import { Typography, Button, Card, Row, Col, Spin } from 'antd'
import {
  PlusOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useNavigate } from '@remix-run/react'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { AppHeader } from '@/designSystem/ui/AppHeader'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  
  const { data: applications, isLoading } = Api.application.findMany.useQuery({
    where: { userId: user?.id },
  })

  const handleCreateApplication = () => {
    navigate('/create-application')
  }

  const handleViewApplications = () => {
    navigate('/applications')
  }

  return (
    <PageLayout layout="narrow">
      <AppHeader title="Welcome to Our Platform" description="Create and manage your applications with ease. Get started by creating a new application or view your existing ones." />

      <Row gutter={[16, 16]} className="my-8">
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={handleCreateApplication}
            className="h-full transition-all duration-300 hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              color: 'var(--color-text-light)'
            }}
          >
            <div className="flex flex-col items-center justify-between h-full">
              <PlusOutlined className="text-6xl mb-4" />
              <Title level={3} style={{ color: 'var(--color-text-light)' }}>Create New Application</Title>
              <Text className="mb-4 text-lg" style={{ color: 'var(--color-text-light)' }}>
                Start a new project and bring your ideas to life.
              </Text>
              <Button type="primary" icon={<PlusOutlined />} className="mt-auto text-lg font-bold">
                Create Application
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={handleViewApplications}
            className="h-full transition-all duration-300 hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              color: 'var(--color-text-light)'
            }}
          >
            <div className="flex flex-col items-center justify-between h-full">
              <AppstoreOutlined className="text-6xl mb-4" />
              <Title level={3} style={{ color: 'var(--color-text-light)' }}>My Applications</Title>
              <Text className="mb-4 text-lg" style={{ color: 'var(--color-text-light)' }}>
                {isLoading
                  ? <Spin />
                  : `You have ${applications?.length || 0} application${
                      applications?.length !== 1 ? 's' : ''
                    }.`}
              </Text>
              <Button type="primary" icon={<AppstoreOutlined />} className="mt-auto text-lg font-bold">
                View Applications
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            className="mt-8 h-full"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              color: 'var(--color-text-light)'
            }}
          >
            <Title level={3} style={{ color: 'var(--color-text-light)' }}>
              <InfoCircleOutlined className="mr-2" style={{ color: 'var(--color-accent)' }} />
              How to Use Our Platform
            </Title>
            <div className="flex flex-col gap-4">
              <Text style={{ color: 'var(--color-text-light)' }}>1. Create a new application by clicking on "Create New Application".</Text>
              <Text style={{ color: 'var(--color-text-light)' }}>2. Fill in the required details for your application.</Text>
              <Text style={{ color: 'var(--color-text-light)' }}>3. Once created, you can view and manage your applications in the "My Applications" section.</Text>
              <Text style={{ color: 'var(--color-text-light)' }}>4. Monitor your application's performance and make updates as needed.</Text>
              <Text style={{ color: 'var(--color-text-light)' }}>5. If you need any assistance, visit our Help & Support page.</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
