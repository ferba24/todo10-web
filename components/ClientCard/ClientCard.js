function Avatar({src}) {
  return (
    <div className="h-28 w-28 mx-auto rounded-full overflow-hidden">
      <img className="w-full object-cover" src={src}/>
    </div>
  )
}


export default function ClientCard({image, text, extra}) {
  return (
      <div className="text-center md:text-left md:flex">
        <div className="md:flex-shrink-0 md:ml-3 mb-5">
          <Avatar src={image} />
        </div>
        <div className="md:px-8 flex flex-wrap content-between">
          <p className="text-gray-500 w-full text-md">{text}</p>
          <p className="text-gray-700 w-full text-sm mt-6 md:mt-4">{extra}</p>
        </div>
      </div>
  )
}