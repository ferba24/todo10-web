
export default function StepIndicator({number, title, desc}) {
  return (
    <>
      <div className="block md:flex items-center space-x-3 justify-center">
        <div className="bg-blue mb-2 md:mb-0 w-8 mx-auto md:mx-0 h-8 flex justify-center items-center rounded-full text-white font-bold">
          {number}
        </div>
        <div className="text-lg font-semibold">
          {title}
        </div>
      </div>
      <div className="mt-2 opacity-70">
        {desc}
      </div>
    </>
  )
}