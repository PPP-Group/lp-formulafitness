import { useEffect, useRef } from 'react'
import './GhlFrame.css'

// Iframe de formulário do GoHighLevel, reutilizável.
// - No modal: várias variantes montadas, `active` alterna a visibilidade.
// - Embutido (ex.: página Prices): `active` fica true e ocupa a largura toda.
//
// IMPORTANTE: o form_embed.js do GHL sobrescreve o *inline-style do iframe*
// (display/visibility/pointer-events) em qualquer iframe que ele reconhece —
// então esconder o iframe por conta própria não resiste. Por isso o iframe fica
// dentro de um wrapper `.ghl-frame` (um DIV nosso, que o script NÃO toca): o
// clipe do inativo (height:0 + overflow:hidden) mora no wrapper.
//
// `instanceId` garante id de DOM único quando o mesmo form é embutido mais de
// uma vez na página (o modal já mantém uma instância montada).
export default function GhlFrame({ config, active = true, instanceId, className = '' }) {
  const ref = useRef(null)
  const domId = `inline-${instanceId || config.formId}`

  useEffect(() => {
    const iframe = ref.current
    if (!iframe) return
    iframe.setAttribute('scrolling', 'no')
    const obs = new MutationObserver(() => {
      if (iframe.getAttribute('scrolling') !== 'no') {
        iframe.setAttribute('scrolling', 'no')
      }
    })
    obs.observe(iframe, { attributes: true, attributeFilter: ['scrolling'] })
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`ghl-frame ${active ? 'is-active' : ''} ${className}`}>
      <iframe
        ref={ref}
        src={`https://api.formulafitness.co/widget/form/${config.formId}`}
        id={domId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={config.formName}
        data-height={config.formHeight}
        data-layout-iframe-id={domId}
        data-form-id={config.formId}
        title={config.ariaLabel}
        scrolling="no"
        style={{ width: '100%', height: `${config.formHeight}px`, border: 'none', display: 'block' }}
      />
    </div>
  )
}
