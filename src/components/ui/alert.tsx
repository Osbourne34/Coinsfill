import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cls from 'classnames'

interface AlertProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export const Alert = (props: AlertProps) => {
  const { children, className, ...other } = props

  return (
    <div
      className={cls(
        'p-4 bg-red-500 text-white font-bold rounded-md',
        className
      )}
      {...other}
    >
      {children}
    </div>
  )
}
