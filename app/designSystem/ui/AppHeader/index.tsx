import { Logo } from '@/designSystem/layouts/NavigationLayout/components/Logo'
import { Flex, Typography, Card } from 'antd'
import styled from 'styled-components'

const { Text, Title } = Typography

type Props = {
  title?: string
  description?: string
}

const StyledCard = styled(Card)`
  background: linear-gradient(145deg, #f6f8fa 0%, #e9ecef 100%);
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`

const StyledFlex = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AppHeader: React.FC<Props> = ({ title = 'ai', description }) => {
  return (
    <StyledCard>
      <StyledFlex align="center" justify="space-between">
        <Flex align="center">
          <Logo height={60} style={{ marginRight: '20px' }} />
          <Flex vertical>
            <Title level={3} style={{ margin: 0 }}>
              {title}
            </Title>
            {description && <Text type="secondary">{description}</Text>}
          </Flex>
        </Flex>
      </StyledFlex>
    </StyledCard>
  )
}
