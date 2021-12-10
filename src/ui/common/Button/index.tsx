import { useRef } from 'react'
import { useButton } from '@react-aria/button'
import type { AriaButtonProps } from '@react-types/button'

interface ButtonProps extends AriaButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'

  className?: string
}

export const Button = ({
  primary = false,
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const primaryClass = primary
    ? 'text-white bg-indigo-600 hover:bg-indigo-700 border-transparent'
    : 'text-gray-700 bg-white hover:bg-gray-50 border-gray-300'

  const sizeClass =
    size === 'small'
      ? 'py-1 px-2 text-xs'
      : size === 'large'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-sm'

  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <button
      type="button"
      className={`
        ${primaryClass} 
        ${sizeClass} 
        font-medium inline-flex items-center  border  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${className}
        `}
      {...buttonProps}
    >
      {props.children}
    </button>
  )
}
