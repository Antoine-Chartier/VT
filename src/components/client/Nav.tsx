 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SVGComponent from '../SVGComponent'


 
export default function Nav() {
  const pathname = usePathname()
 

  return (
    <nav className='flex flex-row p-main-clamp z-10 '>
      <div className='w-full p-8 bg-light-main dark:bg-dark-main'>
        <div className='flex justify-between text-xl'>
          <div>
            <Link href={"/"}>
              <span className='flex'>
                <div className='flex flex-col justify-center w-4 mr-2'>
                  <SVGComponent/>
                </div>
                <span className='mt-1 font-semibold'>Viva Tremblant</span>
              </span>
            </Link>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col justify-center mt-1' >Services</div>
            <div className='flex flex-col justify-center mt-1' >La mission</div>
          </div>
        </div>
      </div>
    </nav>

  )
}