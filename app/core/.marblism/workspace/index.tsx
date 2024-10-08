import { ReactNode } from 'react'
import { Api } from '../../trpc'
import { useMessageReceived, useMessageSend } from './hooks'

type Props = {
  children: ReactNode
}

const useWorkspace = () => {
  const { data } = Api.configuration.getPublic.useQuery()

  const isActive = data?.['PUBLIC_MARBLISM_ENV'] === 'workspace'

  useMessageSend(isActive)

  useMessageReceived(isActive)

  return <></>
}

export const WorkspaceProvider: React.FC<Props> = ({ children }) => {
  useWorkspace()

  return <>{children}</>
}
