 
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
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </li>
        {pathname !== '/' && (
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              Accueil
            </Link>
          </li>
        )}
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