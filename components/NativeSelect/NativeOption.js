function NativeOption({children, value}) {
  return (
    <div
      className="hover:bg-gray-200 px-20 py-1 cursor-pointer"
      value={value}
    >
      {children}
    </div>
  )
}
export default NativeOption