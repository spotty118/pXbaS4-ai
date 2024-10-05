import { Typography, List, Button, message } from 'antd'
import { BellOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationsPage() {
  const { user } = useUserContext()
  const {
    data: notifications,
    isLoading,
    refetch,
  } = Api.notification.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: updateNotification } =
    Api.notification.update.useMutation()

  const { mutate: deleteNotification } = Api.notification.delete.useMutation()

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await updateNotification({
        where: { id: notificationId },
        data: { isRead: true },
      })
      message.success('Notification marked as read')
      refetch()
    } catch (error) {
      message.error('Failed to mark notification as read')
    }
  }

  const handleDismiss = (notificationId: string) => {
    deleteNotification(
      { where: { id: notificationId } },
      {
        onSuccess: () => {
          message.success('Notification dismissed')
          refetch()
        },
        onError: () => {
          message.error('Failed to dismiss notification')
        },
      }
    )
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>
          <BellOutlined /> Notifications
        </Title>
        <Text>Stay informed about important events and updates</Text>
      </div>

      {isLoading ? (
        <div>Loading notifications...</div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={notification => (
            <List.Item
              actions={[
                <Button
                  icon={<CheckOutlined />}
                  onClick={() => handleMarkAsRead(notification.id)}
                  disabled={notification.isRead}
                >
                  Mark as Read
                </Button>,
                <Button
                  icon={<CloseOutlined />}
                  onClick={() => handleDismiss(notification.id)}
                  danger
                >
                  Dismiss
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={notification.message}
                description={
                  <Text type="secondary">
                    {dayjs(notification.dateCreated).format(
                      'MMMM D, YYYY HH:mm',
                    )}
                  </Text>
                }
              />
              {notification.isRead && (
                <Text type="secondary" style={{ fontStyle: 'italic' }}>
                  (Read)
                </Text>
              )}
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}
