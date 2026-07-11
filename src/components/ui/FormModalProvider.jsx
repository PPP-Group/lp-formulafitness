import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FormModal from './FormModal'

// Configuração dos formulários GHL. Exportado para reuso embutido (ex.: Prices).
export const FORM_VARIANTS = {
  consult: {
    formId: '8uSlqyvGEhjrMDPsIkQf',
    formName: '[04/26] Form Formula Fitness | Website',
    formHeight: 814,
    ariaLabel: 'Book a consultation',
  },
  referral: {
    formId: 'GuQTIYMSHInIxFcvmyQk',
    formName: '[04/26] Form Formula Fitness | Referral',
    formHeight: 1025,
    ariaLabel: 'Refer a friend',
  },
  youth: {
    formId: 'oq94z1VX2BjkgmgMyN8F',
    formName: '[04/26] Form Formula Fitness | Youth Program',
    formHeight: 2057,
    ariaLabel: 'Youth training program inquiry',
  },
}

// Variantes restritas: só são montadas/pré-carregadas na própria rota.
// `consult` é global (usado em quase todo botão do site).
const VARIANT_ROUTES = {
  youth: '/youth-training-program',
  referral: '/referrals',
}

const FormModalContext = createContext(null)

export function useFormModal() {
  const ctx = useContext(FormModalContext)
  if (!ctx) {
    throw new Error('useFormModal deve ser usado dentro de <FormModalProvider>')
  }
  return ctx
}

export default function FormModalProvider({ children }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState('consult')
  // Os iframes só passam a existir quando `preload` vira true. Assim o clique
  // apenas *exibe* um iframe já carregado, sem esperar a rede.
  const [preload, setPreload] = useState(false)

  // Conjunto de variantes montadas nesta rota: sempre consult + a restrita da
  // rota atual (se houver). Assim o form "youth" nunca existe fora da /youth.
  const variants = useMemo(() => {
    const out = { consult: FORM_VARIANTS.consult }
    for (const [key, route] of Object.entries(VARIANT_ROUTES)) {
      if (pathname === route) out[key] = FORM_VARIANTS[key]
    }
    return out
  }, [pathname])

  // Aquece os formulários quando o navegador estiver ocioso (não compete c/ LCP).
  useEffect(() => {
    const trigger = () => setPreload(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(trigger, { timeout: 3000 })
      return () => window.cancelIdleCallback?.(id)
    }
    const t = setTimeout(trigger, 2000)
    return () => clearTimeout(t)
  }, [])

  // Ao trocar de rota: fecha o modal e volta para a variante padrão.
  useEffect(() => {
    setOpen(false)
    setVariant('consult')
  }, [pathname])

  const openForm = useCallback((next = 'consult') => {
    setVariant(FORM_VARIANTS[next] ? next : 'consult')
    setPreload(true) // se o clique vier antes do idle, carrega na hora
    setOpen(true)
  }, [])

  const closeForm = useCallback(() => setOpen(false), [])

  return (
    <FormModalContext.Provider value={{ openForm, closeForm }}>
      {children}
      <FormModal
        open={open}
        variant={variant}
        variants={variants}
        preload={preload}
        onClose={closeForm}
      />
    </FormModalContext.Provider>
  )
}
