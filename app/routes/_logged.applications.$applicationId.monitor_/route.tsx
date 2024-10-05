import { Typography, Card, Row, Col, Spin, Table, Tag, Statistic } from 'antd'
import { BarChartOutlined, CodeOutlined, BugOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
interface ContainerMetricsPayload {
  applicationId: string
  metrics: {
    cpuUsage: number
    memoryUsage: number
    networkIO: number
  }
}
interface ContainerLogsPayload {
  applicationId: string
  log: {
    timestamp: string
    level: string
    message: string
  }
}
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ApplicationMonitoringPage() {
  const { applicationId } = useParams()
  const [performanceData, setPerformanceData] = useState<
    ContainerMetricsPayload['metrics'] | null
  >(null)
  const [logs, setLogs] = useState<ContainerLogsPayload['log'][]>([])

  const { data: application, isLoading } = Api.application.findUnique.useQuery({
    where: { id: applicationId },
    include: { user: true },
  })

  useEffect(() => {
    const metricsEvent = SocketClient.useEvent(
      'container-metrics',
      (payload: unknown) => {
        const typedPayload = payload as ContainerMetricsPayload
        if (typedPayload.applicationId === applicationId) {
          setPerformanceData(typedPayload.metrics)
        }
      },
    )

    const logsEvent = SocketClient.useEvent(
      'container-logs',
      (payload: unknown) => {
        const typedPayload = payload as ContainerLogsPayload
        if (typedPayload.applicationId === applicationId) {
          setLogs(prevLogs => [...prevLogs, typedPayload.log].slice(-100))
        }
      },
    )

    return () => {
      metricsEvent.emit({ payload: { close: true } })
      logsEvent.emit({ payload: { close: true } })
    }
  }, [applicationId])

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  const columns = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      render: (level: string) => (
        <Tag
          color={
            level === 'error' ? 'red' : level === 'warn' ? 'orange' : 'green'
          }
        >
          {level.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Application Monitoring</Title>
      <Text>
        Monitor the performance and resource usage of your Docker container in
        real-time.
      </Text>

      <Card
        title={
          <>
            <CodeOutlined /> Application Details
          </>
        }
        style={{ marginTop: 24 }}
      >
        <Text strong>Name: </Text>
        <Text>{application?.description}</Text>
        <br />
        <Text strong>Status: </Text>
        <Text>{application?.status}</Text>
        <br />
        <Text strong>Docker Container ID: </Text>
        <Text>{application?.dockerContainerId}</Text>
      </Card>

      <Card
        title={
          <>
            <BarChartOutlined /> Performance Metrics
          </>
        }
        style={{ marginTop: 24 }}
      >
        {performanceData ? (
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Statistic
                title="CPU Usage"
                value={`${performanceData.cpuUsage.toFixed(2)}%`}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Memory Usage"
                value={`${performanceData.memoryUsage.toFixed(2)} MB`}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Network I/O"
                value={`${performanceData.networkIO.toFixed(2)} KB/s`}
              />
            </Col>
          </Row>
        ) : (
          <Text>Waiting for performance data...</Text>
        )}
      </Card>

      <Card
        title={
          <>
            <BugOutlined /> Application Logs
          </>
        }
        style={{ marginTop: 24 }}
      >
        <Table
          columns={columns}
          dataSource={logs}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </PageLayout>
  )
}
