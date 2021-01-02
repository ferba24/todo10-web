import Link from 'next/link'
import Expand from '../Expand'

export default function DrawerMenu({routes, cto}) {

  const DrawerLink = ({path, label, className, icon}) => (
    <div className="my-3">
      <Link
        href={path}
        prefetch={false}
      >
        <a className={`flex items-center ${className}`}>
          {icon && <img className="mr-4" src={icon}/>}
          {label}
        </a>
      </Link>
    </div>
  )

  const mapRoute = route => (
    <div key={route.path} className="text-xl font-bold text-primary">
      {route.subItems ? (
        <Expand title={route.label} arrowPosition="right">
          {route.subItems.map(subRoute => (
            <DrawerLink
              key={subRoute.path}
              className="text-sm font-light"
              {...subRoute}
            />
          ))}
        </Expand>
      ) : (
        <DrawerLink {...route}/>
      )}
    </div>
  )

  return (
    <div className="p-10 h-full flex flex-col justify-between overflow-y-auto">
      <div>
        {routes.map(mapRoute)}
      </div>
      {cto && <DrawerLink {...cto}/>}
    </div>
  )
}