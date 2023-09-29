import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cls from 'classnames'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'tertiary'
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', disabled, ...other } = props

  return (
    <button
      className={cls(
        'h-[65px] rounded-[50px] py-4 px-4 text-sm font-bold w-full',
        {
          ['bg-orange-gradient text-white shadow-[0_4px_8px_0_rgba(67,41,124,0.25)]']:
            variant === 'primary' && !disabled,
          ['bg-blue-gradient text-white shadow-[0_4px_20px_0_rgba(104,109,224,0.50)]']:
            variant === 'secondary' && !disabled,
          ['bg-light-gray shadow-[0_4px_20px_0_rgba(104,109,224,0.50)]']:
            variant === 'tertiary' && !disabled,
          ['bg-gray-400 text-gray-600']: disabled,
        }
      )}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  )
}
