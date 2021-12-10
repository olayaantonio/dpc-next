import React from 'react'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  icon = null,
  className = '',
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

  return (
    <button
      type="button"
      className={`
        ${primaryClass} 
        ${sizeClass} 
        font-medium inline-flex items-center  border  rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${className}
        `}
      {...props}
    >
      {icon}
      {label}
    </button>
  )
}
