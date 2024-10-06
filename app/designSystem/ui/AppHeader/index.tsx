import { Logo } from '@/designSystem/layouts/NavigationLayout/components/Logo'
import { Flex, Typography, Card } from 'antd'

const { Text, Title } = Typography

type Props = {
  title?: string
  description?: string
}

export const AppHeader: React.FC<Props> = ({ title = 'ai', description }) => {
  return (
    <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-sm mb-5">
      <Flex align="center" justify="space-between" className="md:flex-row flex-col items-center">
        <Flex align="center">
          <Logo height={60} className="mr-5" />
          <Flex vertical>
            <Title level={3} className="m-0">
              {title}
            </Title>
            {description && <Text type="secondary">{description}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}
