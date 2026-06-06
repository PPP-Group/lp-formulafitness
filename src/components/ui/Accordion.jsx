import { useState, useRef } from 'react'
import './Accordion.css'

// Accordion com auto-collapse: apenas um item aberto por vez.
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
        />
      ))}
    </div>
  )
}

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

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
      <div
        className="accordion-content"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : 0 }}
      >
        <p ref={contentRef}>{item.body}</p>
      </div>
    </div>
  )
}
