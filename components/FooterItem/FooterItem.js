
export default function FooterItem({icon, title, desc}) {

  return (
    <div className="flex">
      <div className="w-14 mr-5 flex-0">
        <img src={icon}/>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-lg">
          {title}
        </h4>
        <div className="font-light text-sm">
          {desc}
        </div>
      </div>
    </div>
  )
}