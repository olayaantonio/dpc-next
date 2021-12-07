import React from 'react'

export const TextInput = ({
  value,
  onChange,
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return <input type="text" value={value} onChange={onChange} />
}
