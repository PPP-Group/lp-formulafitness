import { useScrollPosition } from '@hooks/useScrollPosition'
import './ScrollTopButton.css'

export default function ScrollTopButton() {
  const scrolled = useScrollPosition(120)

  return (
    <button
      type="button"
      className={`scroll-top-btn ${scrolled ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M18 15l-6-6-6 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
