import { ReactNode } from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
