import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '@data/navigation'
import ConsultLink from '@components/ui/ConsultLink'
import { assets } from '@utils/constants'
import { useScrollPosition } from '@hooks/useScrollPosition'
import './Header.css'

const DARK_HERO_ROUTES = new Set([
  '/',
  '/training-services',
  '/personal-training',
  '/semi-private-personal-training',
  '/recovery-service',
  '/active-aging',
  '/inbody',
  '/youth-training-program',
  '/referrals',
  '/about',
  '/testimonials',
  '/team',
  '/prices',
  '/blogs',
  '/faq',
  '/join-our-team',
])

function isNavItemActive(item, pathname) {
  if (pathname === item.path) return true
  if (item.children) {
    return item.children.some((child) => pathname === child.path)
  }
  return false
}

export default function Header() {
  const scrolled = useScrollPosition(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const { pathname } = useLocation()

  // .has() cobre rotas exatas; startsWith cobre a vaga individual (/join-our-team/:slug)
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname) || pathname.startsWith('/join-our-team/')
  const isPill = scrolled && !menuOpen
  const solid = scrolled || menuOpen || !hasDarkHero

  useEffect(() => {
    setMenuOpen(false)
    setOpenGroup(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerClass = ['header', solid ? 'header--solid' : '', isPill ? 'header--pill' : '', menuOpen ? 'header--menu-open' : '']
    .filter(Boolean)
    .join(' ')

  const handleLogoClick = (e) => {
    // Já na home: o Link não muda a rota, então rolamos ao topo manualmente
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header className={headerClass}>
        <div className="container header__inner">
          <Link
            to="/"
            className="header__logo"
            aria-label="Formula Fitness — Home"
            onClick={handleLogoClick}
          >
            <img src={assets.logo} alt="Formula Fitness" width="150" height="40" />
          </Link>

          <nav className="header__nav" aria-label="Primary">
            <ul className="header__menu">
              {navigation.map((item) => {
                const active = isNavItemActive(item, pathname)
                return (
                  <li
                    key={item.label}
                    className={`header__item ${item.children ? 'has-dropdown' : ''}`}
                  >
                    <Link
                      to={item.path}
                      className={`header__link ${active ? 'header__link--active' : ''}`}
                    >
                      {item.label}
                      {item.children && <Chevron />}
                    </Link>
                    {item.children && (
                      <ul className="header__dropdown">
                        {item.children.map((child) => {
                          const childActive = pathname === child.path
                          return (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                className={`header__dropdown-link ${childActive ? 'header__dropdown-link--active' : ''}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <ConsultLink className="btn btn-primary header__cta" onClick={() => setMenuOpen(false)}>
            Book a Consultation
          </ConsultLink>

          <button
            type="button"
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Menu mobile FORA do <header> — evita compositing layer containment */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          <ul>
            {navigation.map((item, i) => {
              const active = isNavItemActive(item, pathname)
              return (
                <li key={item.label} className="mobile-menu__item" style={{ '--i': i }}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className={`mobile-menu__group ${active ? 'is-active' : ''}`}
                        aria-expanded={openGroup === item.label}
                        onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      >
                        {item.label}
                        <Chevron />
                      </button>
                      <ul className={`mobile-menu__sub ${openGroup === item.label ? 'is-open' : ''}`}>
                        {item.children.map((child) => {
                          const childActive = pathname === child.path
                          return (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                className={childActive ? 'is-active' : undefined}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`mobile-menu__link ${active ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
          <ConsultLink
            className="btn btn-primary mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
          >
            Book a Consultation
          </ConsultLink>
        </nav>
      </div>
    </>
  )
}

function Chevron() {
  return (
    <svg
      className="chevron"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
