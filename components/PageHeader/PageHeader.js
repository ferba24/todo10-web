
export default function PageHeader({title, desc}) {

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-center mb-4">
        {title}
      </h3>
      <div className="text-center">
        {desc}
      </div>
    </div>
  )
}