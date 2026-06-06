import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reseta o scroll ao topo a cada troca de rota (exceto âncoras).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
