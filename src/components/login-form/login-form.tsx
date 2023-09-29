import { useState } from 'react'
import { useRouter } from 'next/router'

import { SubmitHandler, useForm } from 'react-hook-form'
import Cookie from 'js-cookie'

import { AuthService } from '@/service/auth-service'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'

type FormValues = {
  email: string
  password: string
}

interface LoginFormProps {
  onSuccess: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSuccess } = props
  const { push } = useRouter()
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setError('')
    try {
      const response = await AuthService.login(data)
      Cookie.set('token', response.data.token, {
        expires: 7,
      })
      push('/account')
      onSuccess()
    } catch (error) {
      setError(error as string)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && <Alert>{error}</Alert>}

      <Input
        register={register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Невалидный email',
          },
        })}
        label="email"
        error={errors.email?.message}
        icon={<span className="icon-envelope"></span>}
      />
      <Input
        register={register('password', {
          required: 'Обязательное поле',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
        })}
        type="password"
        label="Пароль"
        error={errors.password?.message}
        icon={<span className="icon-lock"></span>}
      />

      <p className="text-[#86BFEB] text-xs font-medium">Забыли пароль?</p>

      <div className="flex space-x-4">
        <span className="icon-check text-white"></span>
        <p className="text-xs font-medium text-white">
          Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с
          Условиями Соглашения! Правилами и политикой конфиденциальности
          компании
        </p>
      </div>

      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Загрука...' : 'Войти'}
      </Button>
    </form>
  )
}
