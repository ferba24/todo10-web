

export const Content = ({icon, title, desc}) => (
  <div className="text-center">
    <img className="mx-auto w-20" src={icon} />
    <div className="font-medium mt-4 mb-1">{title}</div>
    <div className="opacity-70">{desc}</div>
  </div>
)

export default function Card({children, className, shadow, shadowOnHover, bordered = true, ...props}) {
  return (
    <div
      className={`relative bg-white rounded-xl transition-shadow ${shadowOnHover ? 'hover:shadow-xl' : ''} ${shadow ? 'shadow-xl' : ''} p-8 ${bordered ? 'border' : ''} border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}