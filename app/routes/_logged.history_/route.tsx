import { Typography, List, Card, Button, Space } from 'antd'
import { HistoryOutlined, ReloadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ProjectHistoryPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const {
    data: applications,
    isLoading,
    refetch,
  } = Api.application.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const handleRegenerateCode = async (applicationId: string) => {
    // Navigate to the application details page
    navigate(`/applications/${applicationId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <HistoryOutlined /> Project History
        </Title>
        <Text>
          View and manage your previous application descriptions and generation
          attempts.
        </Text>

        <List
          loading={isLoading}
          dataSource={applications}
          renderItem={application => (
            <List.Item>
              <Card
                title={`Application ${application.id}`}
                extra={
                  <Button
                    icon={<ReloadOutlined />}
                    onClick={() => handleRegenerateCode(application.id)}
                  >
                    Regenerate Code
                  </Button>
                }
                style={{ width: '100%' }}
              >
                <p>
                  <strong>Description:</strong> {application.description}
                </p>
                <p>
                  <strong>Status:</strong> {application.status}
                </p>
                <p>
                  <strong>Created:</strong>{' '}
                  {dayjs(application.dateCreated).format('MMMM D, YYYY HH:mm')}
                </p>
                {application.codeUrl && (
                  <p>
                    <strong>Code URL:</strong>{' '}
                    <a
                      href={application.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {application.codeUrl}
                    </a>
                  </p>
                )}
              </Card>
            </List.Item>
          )}
        />

        {applications?.length === 0 && !isLoading && (
          <Text>You haven't created any applications yet.</Text>
        )}

        <Button onClick={() => refetch()}>Refresh History</Button>
      </Space>
    </PageLayout>
  )
}
