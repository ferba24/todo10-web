const Content = ({icon, title, desc}) => (
  <div className="text-center">
    <img className="mx-auto w-20" src={icon} />
    <div
      className="font-medium mt-4 mb-1"
    >
      {title}
    </div>
    <div
      className="opacity-70 text-sm"
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
      }}
    >
      {desc}
    </div>
  </div>
)
export default Content