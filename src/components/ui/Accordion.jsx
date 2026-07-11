import { useState, useRef, useEffect } from 'react'
import './Accordion.css'

// Accordion. Modo padrão: um item aberto por vez (defaultOpen = índice).
// Modo `multiple`: vários itens abertos ao mesmo tempo; `defaultOpen="all"`
// abre todos de início (usado no modo de busca da FAQ).
export default function Accordion({ items, defaultOpen = 0, multiple = false }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const [openSet, setOpenSet] = useState(
    () => new Set(defaultOpen === 'all' ? items.map((_, i) => i) : [])
  )

  const isOpen = (i) => (multiple ? openSet.has(i) : openIndex === i)

  const toggle = (i) => {
    if (multiple) {
      setOpenSet((prev) => {
        const next = new Set(prev)
        if (next.has(i)) next.delete(i)
        else next.add(i)
        return next
      })
    } else {
      setOpenIndex((prev) => (prev === i ? -1 : i))
    }
  }

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          item={item}
          isOpen={isOpen(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  )
}

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)

  // Mede a altura real após montar/atualizar — cobre o caso de item já aberto
  // no primeiro render (busca), quando o ref ainda não existia.
  useEffect(() => {
    setMaxHeight(isOpen ? contentRef.current?.scrollHeight || 0 : 0)
  }, [isOpen, item.body])

  return (
    <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{item.title}</span>
        <svg
          className="accordion-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="accordion-content" style={{ maxHeight: maxHeight ? `${maxHeight}px` : 0 }}>
        <p ref={contentRef}>{item.body}</p>
      </div>
    </div>
  )
}
