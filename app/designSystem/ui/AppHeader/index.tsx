import { Logo } from '@/designSystem/layouts/NavigationLayout/components/Logo'
import { Flex, Typography, Card } from 'antd'
import { useEffect, useState } from 'react'

const { Text, Title } = Typography

type Props = {
  title?: string
  description?: string
}

export const AppHeader: React.FC<Props> = ({ title = 'ai', description }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200 rounded-lg shadow-sm mb-5 transition-all duration-300 ease-in-out">
      <Flex className="flex-col md:flex-row items-center justify-between">
        <Flex align="center" className="mb-4 md:mb-0">
          <Logo height={60} className="mr-5" />
          <Flex vertical className={`transition-all duration-500 ease-in-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Title level={3} className="m-0 text-gray-800">
              {title}
            </Title>
            {description && <Text className="text-gray-600">{description}</Text>}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}
