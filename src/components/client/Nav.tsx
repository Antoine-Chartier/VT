 
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
 
export default function Nav() {
  const pathname = usePathname()
 
  return (
    <nav className={'flex justify-center p-10'}>
      <ul className={'flex gap-10'}>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            <Image
              src="/logos/logo-fondGrisTopResolution.webp"
              alt="Logo"
              width={500}
              height={500}
            />
          </Link>

        </li>
        <li>
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
      </ul>
    </nav>
  )
}