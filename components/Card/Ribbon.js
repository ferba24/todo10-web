export default function Ribbon({
  text,
  offset = -1,
  style = {},
  ...rest
}) {
  return (
    <div
      className="absolute w-40 h-24 overflow-hidden z-10"
      style={{left: offset, top: offset }}
    >
      <div
        className="absolute flex justify-center bg-orange text-white font-bold py-1 text-sm placeholder-shine"
        style={{
          left: 0,
          right: 0,
          top: 58,
          transform: 'translate3d(-40px, -40px, 0) rotate(-38deg)',
          ...style
        }}
        {...rest}
      >
        {text}
      </div>
    </div>
  )
}