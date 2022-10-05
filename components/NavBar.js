import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../styles/components/Navbar.module.css'

export default function NavBar() {
  const router = useRouter()

  return (
    <>
      <nav
        className={`navbar navbar-expand-md ${Navbar.customNavbar}`}
        arial-label='navigation bar'
      >
        <div className='container'>
          <h2>
            <Link href='/'>
              <a className={`${Navbar.customNavbarBrand}`}>Store App</a>
            </Link>
          </h2>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarApp'
            aria-controls='navbarApp'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarApp'>
            <ul className='navbar-nav ms-auto mb-2 mb-md-0'>
              <li className={`${Navbar.customNavbarNavLi}`}>
                <Link href='/categories'>
                  <a
                    className={`nav-link ${Navbar.customNavbarNavLiA} ${
                      router.pathname === '/categories'
                        ? `${Navbar.activeLink}`
                        : ''
                    }`}
                  >
                    All Categories
                  </a>
                </Link>
              </li>

              <li className={`${Navbar.customNavbarNavLi}`}>
                <Link href='/brands'>
                  <a
                    className={`nav-link ${Navbar.customNavbarNavLiA} ${
                      router.pathname === '/brands'
                        ? `${Navbar.activeLink}`
                        : ''
                    }`}
                  >
                    Shop By Brand
                  </a>
                </Link>
              </li>

              <li className={`${Navbar.customNavbarNavLi}`}>
                <Link href='/new-arrivals'>
                  <a
                    className={`nav-link ${Navbar.customNavbarNavLiA} ${
                      router.pathname === '/new-arrivals'
                        ? `${Navbar.activeLink}`
                        : ''
                    }`}
                  >
                    New Arrivals
                  </a>
                </Link>
              </li>
            </ul>

            <div className={`${Navbar.ctaLi}`}>
              <div className={`${Navbar.ctaLiD}`}>
                <Image
                  src='/images/user.svg'
                  alt='user'
                  width={26}
                  height={26}
                />
              </div>

              <div className={`${Navbar.ctaLiD}`}>
                <Image
                  src='/images/cart.svg'
                  alt='user'
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
