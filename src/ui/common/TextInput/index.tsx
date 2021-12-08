import React from 'react'
import { StringMap } from 'ts-jest/dist/types'

export const TextInput = ({
  label,
  name,
  value = '',
  placeholder = '',
  onChange,
}: {
  name: string
  label?: string
  value?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="m-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  )
}
