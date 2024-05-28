 'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

 
export default function Nav() {
  const pathname = usePathname()
 

  return (
    <nav className='flex flex-col md:flex-row md:m-20 md:ml-0'>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          <Image
            src="/logos/Viva-Tremblant-logo-transparant.webp"
            alt="Logo"
            width={477}
            height={222}
            priority
          />
        </Link>
    <div className={'flex justify-center m-10 mr-0 '}>


      <ul className={'flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3 sm:gap-6 md:gap-10 [font-size:_clamp(1.5em,2vw,4em)] font-semibold'}>
        <li className=''>
          <Link
            className={`link ${pathname === '/services' ? 'active' : ''}`}
            href="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/contact' ? 'active' : ''}`}
            href="/contact"
          >
            Contactez-nous
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname.startsWith('/blogue') ? 'active' : ''}`}
            href="/blogue"
          >
            Blogue
          </Link>
        </li>
      </ul>
    </div>
    </nav>

  )
}