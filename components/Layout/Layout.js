import { useState } from 'react'
import routes, {cto} from '../../data/routes'
import useScrollQuery from '../../lib/useScrollQuery'

import MenuIcon from '../MenuIcon'
import Navbar from '../Navbar'
import Drawer from '../Drawer'
import DrawerMenu from '../Drawer/DrawerMenu'
import Footer from '../Footer'

export default function Layout({children}) {

  const [drawerV, setDrawerV] = useState(false)
  const scrolled = useScrollQuery(50)

  const menuIcon = (
    <MenuIcon
      open={drawerV}
      onClick={() => setDrawerV(!drawerV)}
      className={`transition-all duration-500 fixed z-50 right-6 ${scrolled ? 'top-5' : 'top-7'} md:hidden`}
    />
  )

  return (
    <div className="overflow-hidden min-h-screen">
      {menuIcon}
      <Navbar routes={[...routes, cto]} scrolled={scrolled}/>
      <Drawer visible={drawerV}>
        <DrawerMenu routes={routes} cto={cto}/>
      </Drawer>
      {children}
      <Footer/>
    </div>
  )
}