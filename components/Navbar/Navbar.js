import NavbarMenu from './NavbarMenu'
import Link from 'next/link'

export default function Navbar({routes, scrolled}) {
  return (
    <div className="fixed top-0 left-0 w-full z-30">
      <div className={`relative z-10 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-3' : 'py-6'}`}>
        <div className="flex items-center justify-between container px-3 lg:p-0 ">
          <Link href="/en/">
            <img
              src='/logo.svg'
              className={`transform transition cursor-pointer h-8 md:h-12 ${scrolled ? 'scale-90' : ''}`}
            />
          </Link>
          <NavbarMenu routes={routes} scrolled={scrolled}/>
        </div>
      </div>
    </div>
  )
}