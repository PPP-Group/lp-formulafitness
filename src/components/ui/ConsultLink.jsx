import { useNavigate } from 'react-router-dom'

// CTA que leva ao formulário de consulta (#consult).
// - Se a página atual já contém a seção #consult, rola suavemente até ela — SEMPRE,
//   inclusive em cliques repetidos. Isso corrige o "segundo clique morto": ao navegar
//   por hash, o React Router não detecta mudança quando a URL já é /#consult, então o
//   scroll não voltava a disparar.
// - Se a página não tem formulário próprio, navega para o formulário da home (/#consult).
export default function ConsultLink({ className, children, onClick, ...rest }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    e.preventDefault()

    const target = document.getElementById('consult')
    if (target) {
      // Defere um frame: se o clique veio do menu mobile (que trava o scroll do
      // body com overflow:hidden), dá tempo do React fechar o menu e restaurar o
      // scroll antes de rolarmos até o formulário.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    } else {
      navigate('/#consult')
    }
  }

  return (
    <a href="/#consult" className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
