import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './FormModal.css'

export default function FormModal({ open, onClose, config, variantKey }) {
  const panelRef  = useRef(null)
  const iframeRef = useRef(null)
  const lastFocused = useRef(null)

  /* Lock body scroll + ESC close */
  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement

    const onKey = (e) => { if (e.key === 'Escape') onClose() }
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

  /* Enforce scrolling="no" on the iframe even if form_embed.js resets it */
  useEffect(() => {
    if (!open) return
    const iframe = iframeRef.current
    if (!iframe) return

    iframe.setAttribute('scrolling', 'no')

    const observer = new MutationObserver(() => {
      if (iframe.getAttribute('scrolling') !== 'no') {
        iframe.setAttribute('scrolling', 'no')
      }
    })
    observer.observe(iframe, { attributes: true, attributeFilter: ['scrolling'] })
    return () => observer.disconnect()
  }, [open, variantKey])

  if (!open || !config) return null

  return createPortal(
    <div
      className="form-modal"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="form-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={config.ariaLabel}
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
          <iframe
            key={variantKey}
            ref={iframeRef}
            src={`https://api.formulafitness.co/widget/form/${config.formId}`}
            id={`inline-${config.formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={config.formName}
            data-height={config.formHeight}
            data-layout-iframe-id={`inline-${config.formId}`}
            data-form-id={config.formId}
            title={config.ariaLabel}
            scrolling="no"
            style={{
              width: '100%',
              height: `${config.formHeight}px`,
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
