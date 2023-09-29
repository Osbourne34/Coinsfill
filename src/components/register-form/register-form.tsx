import { useState } from 'react'

import { Alert } from '../ui/alert'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthService } from '@/service/auth-service'

import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

type FormValues = {
  email: string
  password: string
  password_confirmation: string
}

interface RegisterFormProps {
  onSuccess: () => void
}

export const RegisterForm = (props: RegisterFormProps) => {
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
      password_confirmation: '',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setError('')
    try {
      const response = await AuthService.register(data)
      Cookies.set('token', response.data.token, {
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
        label="Email"
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
        label="Пароль"
        error={errors.password?.message}
        icon={<span className="icon-lock"></span>}
        type="password"
      />

      <Input
        register={register('password_confirmation', {
          validate: (value, values) => {
            if (value !== values.password) return 'Пароли не совпадают'
          },
        })}
        label="Подтвердите пароль"
        error={errors.password_confirmation?.message}
        icon={<span className="icon-envelope"></span>}
        type="password"
      />

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
