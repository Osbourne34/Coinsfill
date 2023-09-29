import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container = (props: ContainerProps) => {
  const { children } = props

  return <div className="mx-auto px-7">{children}</div>
}
