function NativeOption({children, value}) {
  return (
    <option value={value}>
      {children}
    </option>
  )
}
export default NativeOption