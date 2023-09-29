import { ReactNode, useRef } from 'react'
import cls from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
  label: string
  icon: ReactNode
  type?: 'text' | 'password'
  register: UseFormRegisterReturn
  error?: string
}

export const Input = (props: InputProps) => {
  const { label, icon, type = 'text', register, error } = props
  const inputRef = useRef<HTMLInputElement | null>()

  const handleChangeType = () => {
    if (inputRef.current?.type === 'text') {
      inputRef.current?.setAttribute('type', 'password')
    } else {
      inputRef.current?.setAttribute('type', 'text')
    }
  }

  return (
    <div>
      <label>
        <div className="text-sm mb-2 text-white font-bold capitalize">
          {label}
        </div>
        <div className="relative">
          <div className="text-[#C2DEF4] absolute text-[20px] w-6 h-6 top-1/2 -translate-y-1/2 left-4 flex items-center justify-center">
            {icon}
          </div>
          <input
            {...register}
            ref={(input) => {
              inputRef.current = input
              register.ref(input)
            }}
            className={cls(
              'bg-white w-full text-sm pl-14 pr-4 py-4 font-medium outline-none rounded-full',
              {
                ['pr-14']: type === 'password',
              }
            )}
            type={type}
          />
          {type === 'password' && (
            <div
              onClick={handleChangeType}
              className="absolute top-1/2 right-5 -translate-y-1/2 flex items-center justify-center w-6 h-6 text-blue"
            >
              <span className="icon-eye"></span>
            </div>
          )}
        </div>
      </label>
      <p className="text-sm font-bold text-red-500 mt-1"> {error}</p>
    </div>
  )
}
