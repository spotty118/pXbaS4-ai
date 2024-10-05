import { Typography, List, Tag, Space, Button } from 'antd'
import { AppstoreOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyApplicationsPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { data: applications, isLoading } = Api.application.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generating':
        return 'processing'
      case 'running':
        return 'success'
      case 'stopped':
        return 'error'
      default:
        return 'default'
    }
  }

  const handleViewDetails = (applicationId: string) => {
    navigate(`/applications/${applicationId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>
            <AppstoreOutlined /> My Applications
          </Title>
          <Paragraph>
            View and manage all the applications you have generated.
          </Paragraph>
        </div>

        <List
          loading={isLoading}
          dataSource={applications}
          renderItem={application => (
            <List.Item
              key={application.id}
              actions={[
                <Button
                  icon={<EyeOutlined />}
                  onClick={() => handleViewDetails(application.id)}
                >
                  View Details
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={application.description || 'Untitled Application'}
                description={
                  <Space direction="vertical">
                    <Tag color={getStatusColor(application.status || '')}>
                      {application.status || 'Unknown'}
                    </Tag>
                    <span>
                      Created:{' '}
                      {dayjs(application.dateCreated).format('MMMM D, YYYY')}
                    </span>
                  </Space>
                }
              />
            </List.Item>
          )}
          locale={{
            emptyText: 'No applications found. Create your first application!',
          }}
        />
      </Space>
    </PageLayout>
  )
}
