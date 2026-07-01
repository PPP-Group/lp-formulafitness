import { useFormModal } from '@components/ui/FormModalProvider'

// CTA de conversão do site. Abre o pop-up com o formulário correspondente:
//  - variant="consult"  (padrão) → formulário geral de consulta
//  - variant="referral"          → formulário de indicação (página Referrals)
//
// Mantém-se como <a href="/#consult"> por dois motivos: preserva a estilização
// de seletores existentes (ex.: a.header__cta) e a acessibilidade de link
// focável. O href serve apenas de fallback — o clique abre o modal.
export default function ConsultLink({ className, children, variant = 'consult', onClick, ...rest }) {
  const { openForm } = useFormModal()

  const handleClick = (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    e.preventDefault()
    openForm(variant)
  }

  return (
    <a href="/#consult" className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
