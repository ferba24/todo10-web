import { useContext } from 'react'
import RadioContext from './context'

export default function RadioChip({children, value, className = '', ...props}) {

  const { value: contextValue, setValue } = useContext(RadioContext)
  const checked = value == contextValue

  return (
    <div
      className={`rounded-lg cursor-pointer py-3 text-center ${checked ? 'bg-white text-wordpress' : 'text-primary'} ${className}`}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </div>
  )
}