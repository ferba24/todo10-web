import NativeOption from './NativeOption'

export default function NativeSelect({
  onChange = () => {},
  children
}) {

  return (
    <select onChange={onChange}>
      {children}
    </select>
  )
}

NativeSelect.Option = NativeOption