import React from 'react'
import { Typography, Flex, Card, Button } from 'antd'
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
import styled from 'styled-components'

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

      <Flex justify="center" gap={16} className="my-8 flex-wrap">
        <StyledCard
          hoverable
          onClick={handleCreateApplication}
          className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.33%-10.67px)] text-center"
        >
          <Flex vertical align="center" className="h-full">
            <PlusOutlined className="text-6xl mb-4 text-blue-500" />
            <Title level={3} className="font-bold">Create New Application</Title>
            <Text className="mb-4 text-lg">
              Start a new project and bring your ideas to life.
            </Text>
            <Button type="primary" icon={<PlusOutlined />} className="mt-auto text-lg">
              Create Application
            </Button>
          </Flex>
        </StyledCard>
        <StyledCard
          hoverable
          onClick={handleViewApplications}
          className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.33%-10.67px)] text-center"
        >
          <Flex vertical align="center" className="h-full">
            <AppstoreOutlined className="text-6xl mb-4 text-green-500" />
            <Title level={3} className="font-bold">My Applications</Title>
            <Text className="mb-4 text-lg">
              {isLoading
                ? 'Loading...'
                : `You have ${applications?.length || 0} application${
                    applications?.length !== 1 ? 's' : ''
                  }.`}
            </Text>
            <Button type="primary" icon={<AppstoreOutlined />} className="mt-auto text-lg">
              View Applications
            </Button>
          </Flex>
        </StyledCard>
      </Flex>

      <StyledCard className="mt-8">
        <Title level={3} className="font-bold">
          <InfoCircleOutlined className="mr-2 text-yellow-500" />
          How to Use Our Platform
        </Title>
        <Flex vertical gap={8}>
          <Text className="text-lg">1. Create a new application by clicking on "Create New Application".</Text>
          <Text className="text-lg">2. Fill in the required details for your application.</Text>
          <Text className="text-lg">3. Once created, you can view and manage your applications in the "My Applications" section.</Text>
          <Text className="text-lg">4. Monitor your application's performance and make updates as needed.</Text>
          <Text className="text-lg">5. If you need any assistance, visit our Help & Support page.</Text>
        </Flex>
      </StyledCard>
    </PageLayout>
  )
}

const StyledCard = styled(Card)`
  background: linear-gradient(145deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .ant-card-body {
    padding: 24px;
  }

  .ant-typography {
    color: white;
  }

  .ant-btn {
    background: white;
    color: #2575fc;
    border: none;
    font-weight: bold;
    
    &:hover {
      background: #f0f0f0;
      color: #6a11cb;
    }
  }
`
