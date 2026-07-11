import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import GhlFrame from './GhlFrame'
import './FormModal.css'

// Pop-up dos formulários. Sempre montado no DOM; a visibilidade é controlada por
// CSS (.is-open). Os 3 iframes são renderizados assim que `preload` fica true e
// nunca são desmontados/recriados — por isso o clique é instantâneo.
export default function FormModal({ open, variant, variants, preload, onClose }) {
  const panelRef = useRef(null)
  const lastFocused = useRef(null)

  useEffect(() => {
    if (!open) return

    lastFocused.current = document.activeElement
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const raf = requestAnimationFrame(() => {
      panelRef.current?.querySelector('button')?.focus()
    })

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      cancelAnimationFrame(raf)
      lastFocused.current?.focus?.()
    }
  }, [open, onClose])

  const active = variants[variant] || variants.consult

  return createPortal(
    <div
      className={`form-modal ${open ? 'is-open' : ''}`}
      role="presentation"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="form-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={active.ariaLabel}
        ref={panelRef}
      >
        <button
          type="button"
          className="form-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="form-modal__scroll">
          {preload &&
            Object.keys(variants).map((key) => (
              <GhlFrame key={key} config={variants[key]} active={key === variant} />
            ))}
        </div>
      </div>
    </div>,
    document.body
  )
}
