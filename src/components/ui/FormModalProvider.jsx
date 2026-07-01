import { createContext, useCallback, useContext, useState } from 'react'
import FormModal from './FormModal'

const VARIANTS = {
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

const FormModalContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useFormModal() {
  const ctx = useContext(FormModalContext)
  if (!ctx) {
    throw new Error('useFormModal deve ser usado dentro de <FormModalProvider>')
  }
  return ctx
}

export default function FormModalProvider({ children }) {
  const [variant, setVariant] = useState(null)

  const openForm = useCallback((next = 'consult') => {
    setVariant(VARIANTS[next] ? next : 'consult')
  }, [])

  const closeForm = useCallback(() => setVariant(null), [])

  return (
    <FormModalContext.Provider value={{ openForm, closeForm }}>
      {children}
      <FormModal
        open={variant !== null}
        onClose={closeForm}
        config={variant ? VARIANTS[variant] : null}
        variantKey={variant}
      />
    </FormModalContext.Provider>
  )
}
