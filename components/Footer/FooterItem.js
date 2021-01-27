const FooterItem = ({icon, title, desc}) => (
  <div className="flex">
    <div className="w-14 mr-5 flex-0">
      <img src={icon}/>
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-lg">
        {title}
      </h4>
      <div className="text-sm">
        {desc}
      </div>
    </div>
  </div>
)
export default FooterItem