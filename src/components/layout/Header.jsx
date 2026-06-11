import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '@data/navigation'
import { assets } from '@utils/constants'
import { useScrollPosition } from '@hooks/useScrollPosition'
import './Header.css'

// Rotas cujo topo é um hero ESCURO (home + páginas com PageHero image).
// Nelas o header pode ficar transparente com texto branco no topo.
// Qualquer outra rota tem topo claro → header sólido desde o início (texto escuro legível).
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
])

export default function Header() {
  const scrolled = useScrollPosition(50)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null) // grupo expandido no mobile
  const { pathname } = useLocation()

  // Header transparente só sobre hero escuro e no topo; caso contrário, sólido.
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname)
  const solid = scrolled || menuOpen || !hasDarkHero

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setMenuOpen(false)
    setOpenGroup(null)
  }, [pathname])

  // Bloqueia o scroll do body quando o menu fullscreen está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${solid ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Formula Fitness — Home">
          <img src={assets.logo} alt="Formula Fitness" width="150" height="40" />
        </Link>

        {/* Navegação desktop */}
        <nav className="header__nav" aria-label="Primary">
          <ul className="header__menu">
            {navigation.map((item) => (
              <li
                key={item.label}
                className={`header__item ${item.children ? 'has-dropdown' : ''}`}
              >
                <Link to={item.path} className="header__link">
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <ul className="header__dropdown">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} className="header__dropdown-link">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="/#consult" className="btn btn-primary header__cta">
          Book a Consultation
        </a>

        {/* Botão hamburger (mobile) */}
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

      {/* Overlay mobile fullscreen */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          <ul>
            {navigation.map((item, i) => (
              <li
                key={item.label}
                className="mobile-menu__item"
                style={{ '--i': i }}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="mobile-menu__group"
                      aria-expanded={openGroup === item.label}
                      onClick={() =>
                        setOpenGroup((g) => (g === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <Chevron />
                    </button>
                    <ul
                      className={`mobile-menu__sub ${
                        openGroup === item.label ? 'is-open' : ''
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link to={child.path}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.path} className="mobile-menu__link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a href="/#consult" className="btn btn-primary mobile-menu__cta">
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
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
