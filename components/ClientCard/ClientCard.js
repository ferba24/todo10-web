export default function ClientCard({image, text, extra}) {

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="md:flex md:h-40">
        <div className="hidden md:block md:flex-shrink-0">
          <img className="h-40 w-full object-cover md:w-40" src={image} alt="Man looking at item at a store"/>
        </div>
        <div className="p-4 md:px-8 md:py-6 flex flex-wrap content-between">
          <p className="text-gray-500 w-full mb-2">{text}</p>
          <p className="text-gray-700 w-full text-sm">{extra}</p>
        </div>
      </div>
    </div>
  )
}