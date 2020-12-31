import { useState } from 'react'
import routes, {cto} from '../../data/routes'

import MenuIcon from '../MenuIcon'
import Navbar from '../Navbar'
import Drawer from '../Drawer'
import DrawerMenu from './DrawerMenu'

export default function Layout({children}) {

  const [drawerV, setDrawerV] = useState(false)

  const menuIcon = (
    <MenuIcon
      open={drawerV}
      onClick={() => setDrawerV(!drawerV)}
      className="fixed z-50 right-6 top-7 md:hidden"
    />
  )

  return (
    <div>
      {menuIcon}
      <Navbar routes={[...routes, cto]}/>
      <Drawer visible={drawerV}>
        <DrawerMenu routes={routes} cto={cto}/>
      </Drawer>
      {children}
    </div>
  )
}