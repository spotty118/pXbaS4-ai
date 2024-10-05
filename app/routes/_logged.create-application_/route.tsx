import { useState } from 'react'
import { Typography, Input, Button, Space, message, Progress } from 'antd'
import { RocketOutlined, LoadingOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateApplicationPage() {
  const [description, setDescription] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const generateApplication = Api.ai.generateText.useMutation()
  const createApplication = Api.application.create.useMutation()

  const handleSubmit = async () => {
    if (!description.trim()) {
      message.error('Please enter a description for your application.')
      return
    }

    setIsGenerating(true)
    setProgress(0)

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 10
          return newProgress > 90 ? 90 : newProgress
        })
      }, 1000)

      // Generate code using GPT
      const generatedCode = await generateApplication.mutateAsync({
        prompt: description,
      })

      clearInterval(progressInterval)
      setProgress(100)

      // Create the application in the database
      await createApplication.mutateAsync({
        data: {
          description: description,
          status: 'Generated',
          codeUrl: generatedCode.answer, // Assuming the generated code is returned in the 'answer' field
        },
      })

      message.success('Application generated successfully!')
    } catch (error) {
      message.error('Failed to generate application. Please try again.')
    } finally {
      setIsGenerating(false)
      setProgress(0)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Create New Application</Title>
        <Paragraph>
          Describe the application you want to generate, and our AI will create
          the code for you.
        </Paragraph>

        <Input.TextArea
          rows={6}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter a description of the application you want to generate..."
          disabled={isGenerating}
        />

        <Button
          type="primary"
          icon={isGenerating ? <LoadingOutlined /> : <RocketOutlined />}
          onClick={handleSubmit}
          loading={isGenerating}
          disabled={isGenerating}
          block
        >
          {isGenerating ? 'Generating...' : 'Generate Application'}
        </Button>

        {isGenerating && (
          <Progress percent={progress} status="active" strokeColor="#1890ff" />
        )}
      </Space>
    </PageLayout>
  )
}
