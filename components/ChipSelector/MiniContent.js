const MiniContent = ({image, title}) => (
  <div className="flex items-center select-none justify-center p-3 cursor-pointer text-wordpress">
    <img src={image} className="mr-3"/>
    <div className="font-bold text-lg">{title}</div>
  </div>
)
export default MiniContent