import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// A cada troca de rota: rola ao topo, ou até a âncora (#id) quando houver hash.
// O conteúdo pode renderizar de forma assíncrona (rotas lazy + Suspense),
// então tentamos rolar repetidamente até a âncora existir.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    let cancelled = false
    const start = Date.now()
    const tryScroll = () => {
      if (cancelled) return
      let el = null
      try {
        el = document.querySelector(hash)
      } catch {
        el = null
      }
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      // tenta por até 3s para cobrir o carregamento de rotas lazy
      if (Date.now() - start < 3000) {
        requestAnimationFrame(tryScroll)
      }
    }
    requestAnimationFrame(tryScroll)

    return () => {
      cancelled = true
    }
  }, [pathname, hash])

  return null
}
