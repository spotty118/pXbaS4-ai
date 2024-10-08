import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useNavigate } from '@remix-run/react'
import { Button, Typography } from 'antd'
const { Title, Text } = Typography

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
      <AppHeader
        title="Welcome to Our Platform"
        description="Create and manage your applications with ease. Get started by creating a new application or view your existing ones."
      />

      <div className="flex justify-center gap-4 my-8 flex-wrap">
        <div
          onClick={handleCreateApplication}
          className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.33%-10.67px)] text-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-between h-full">
            <PlusOutlined className="text-6xl mb-4" />
            <Title level={3} className="font-bold text-white">
              Create New Application
            </Title>
            <Text className="mb-4 text-lg text-white">
              Start a new project and bring your ideas to life.
            </Text>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="mt-auto text-lg bg-white text-blue-500 hover:bg-gray-100 hover:text-purple-600 border-none font-bold"
            >
              Create Application
            </Button>
          </div>
        </div>
        <div
          onClick={handleViewApplications}
          className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.33%-10.67px)] text-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-between h-full">
            <AppstoreOutlined className="text-6xl mb-4" />
            <Title level={3} className="font-bold text-white">
              My Applications
            </Title>
            <Text className="mb-4 text-lg text-white">
              {isLoading
                ? 'Loading...'
                : `You have ${applications?.length || 0} application${
                    applications?.length !== 1 ? 's' : ''
                  }.`}
            </Text>
            <Button
              type="primary"
              icon={<AppstoreOutlined />}
              className="mt-auto text-lg bg-white text-blue-500 hover:bg-gray-100 hover:text-purple-600 border-none font-bold"
            >
              View Applications
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-lg shadow-lg">
        <Title level={3} className="font-bold text-white">
          <InfoCircleOutlined className="mr-2 text-yellow-300" />
          How to Use Our Platform
        </Title>
        <div className="flex flex-col gap-4">
          <Text className="text-lg text-white">
            1. Install the application:
          </Text>
          <Text className="text-lg text-white ml-4">
            <a
              href="/INSTALL.md"
              className="text-yellow-300 hover:text-yellow-100 underline font-bold"
            >
              Click here for our detailed installation guide
            </a>
          </Text>
          <Text className="text-lg text-white">
            2. Create a new application:
          </Text>
          <Text className="text-lg text-white ml-4">
            • Click on "Create New Application"
          </Text>
          <Text className="text-lg text-white ml-4">
            • Describe your application idea in detail
          </Text>
          <Text className="text-lg text-white ml-4">
            • Our AI will generate the initial code based on your description
          </Text>
          <Text className="text-lg text-white">
            3. Customize your application:
          </Text>
          <Text className="text-lg text-white ml-4">
            • Review the generated code
          </Text>
          <Text className="text-lg text-white ml-4">
            • Make adjustments using our intuitive interface or by editing the
            code directly
          </Text>
          <Text className="text-lg text-white ml-4">
            • Utilize AI-powered features for code optimization and bug fixing
          </Text>
          <Text className="text-lg text-white">
            4. Manage your applications:
          </Text>
          <Text className="text-lg text-white ml-4">
            • Access your applications through the "My Applications" section
          </Text>
          <Text className="text-lg text-white ml-4">
            • Monitor performance metrics and resource usage in real-time
          </Text>
          <Text className="text-lg text-white ml-4">
            • View and analyze application logs for troubleshooting
          </Text>
          <Text className="text-lg text-white">5. Deploy and scale:</Text>
          <Text className="text-lg text-white ml-4">
            • Deploy your application with a single click to secure Docker
            containers
          </Text>
          <Text className="text-lg text-white ml-4">
            • Easily scale your application as your user base grows
          </Text>
          <Text className="text-lg text-white">
            6. Collaborate and get support:
          </Text>
          <Text className="text-lg text-white ml-4">
            • Invite team members to collaborate on your projects
          </Text>
          <Text className="text-lg text-white ml-4">
            • Access our comprehensive documentation and community forums
          </Text>
          <Text className="text-lg text-white ml-4">
            • Contact our support team for personalized assistance
          </Text>
        </div>
      </div>
    </PageLayout>
  )
}
