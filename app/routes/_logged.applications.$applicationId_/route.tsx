import React, { useState, useEffect } from 'react'
import { Typography, Button, Space, Card, Spin, Alert } from 'antd'
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  CodeOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
interface LogPayload {
  applicationId?: string
  log?: string
}
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ApplicationDetailsPage() {
  const { applicationId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [logs, setLogs] = useState<string[]>([])

  const {
    data: application,
    isLoading,
    refetch,
  } = Api.application.findUnique.useQuery({
    where: { id: applicationId },
  })

  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()

  const toggleContainerStatus = async () => {
    if (!application) return

    const newStatus = application.status === 'running' ? 'stopped' : 'running'
    await updateApplication({
      where: { id: applicationId },
      data: { status: newStatus },
    })
    refetch()
  }

  useEffect(() => {
    const { emit } = SocketClient.useEvent(
      'application-logs',
      (payload: LogPayload) => {
        if (payload.applicationId === applicationId && payload.log) {
          setLogs(prevLogs => [...prevLogs, payload.log])
        }
      },
    )

    return () => {
      // No need to unsubscribe as there's no unsubscribe method
    }
  }, [applicationId])

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!application) {
    return (
      <PageLayout layout="narrow">
        <Alert
          message="Application not found"
          description="The requested application could not be found."
          type="error"
          showIcon
        />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Application Details</Title>
        <Paragraph>
          View and manage your application details, container status, and logs.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Text strong>Description: </Text>
            <Paragraph>{application.description}</Paragraph>

            <Text strong>Status: </Text>
            <Text>{application.status}</Text>

            <Text strong>Created: </Text>
            <Text>
              {dayjs(application.dateCreated).format('MMMM D, YYYY HH:mm')}
            </Text>

            <Space>
              <Button
                type="primary"
                icon={
                  application.status === 'running' ? (
                    <PauseCircleOutlined />
                  ) : (
                    <PlayCircleOutlined />
                  )
                }
                onClick={toggleContainerStatus}
              >
                {application.status === 'running'
                  ? 'Stop Container'
                  : 'Start Container'}
              </Button>
              <Button
                icon={<CodeOutlined />}
                onClick={() => navigate(`/applications/${applicationId}/code`)}
              >
                View Generated Code
              </Button>
            </Space>
          </Space>
        </Card>

        <Card title="Application Logs">
          <Space direction="vertical" style={{ width: '100%' }}>
            {logs.length > 0 ? (
              logs.map((log, index) => (
                <Text key={index} style={{ fontFamily: 'monospace' }}>
                  {log}
                </Text>
              ))
            ) : (
              <Text>No logs available.</Text>
            )}
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
