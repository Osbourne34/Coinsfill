import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { LoginForm } from '@/components/login-form/login-form'
import { Popup } from '@/components/ui/popup'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ReactElement, useState } from 'react'
import { RegisterForm } from '@/components/register-form/register-form'
import { Layout } from '@/components/layout/layout'

const Home = () => {
  const [open, setOpen] = useState<'login' | 'register' | null>(null)

  const handleOpenLoginForm = () => {
    setOpen('login')
  }

  const handleOpenRegisterForm = () => {
    setOpen('register')
  }

  const handleClose = () => {
    setOpen(null)
  }

  return (
    <div className="pt-14 pb-5d">
      <Container>
        <h4 className="text-2xl font-bold mb-20">Выберите действие</h4>

        <div className="space-y-5">
          <Button onClick={handleOpenLoginForm}>Login</Button>
          <Button onClick={handleOpenRegisterForm} variant="secondary">
            Registration
          </Button>
        </div>
      </Container>

      <Popup open={open === 'login'} onClose={handleClose} title="Логин">
        <LoginForm onSuccess={handleClose} />
      </Popup>
      <Popup
        open={open === 'register'}
        onClose={handleClose}
        title="Регистрация"
      >
        <RegisterForm onSuccess={handleClose} />
      </Popup>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
