import { useState, useMemo } from 'react'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import Accordion from '@components/ui/Accordion'
import ConsultLink from '@components/ui/ConsultLink'
import ConsultCTA from '@components/sections/ConsultCTA'
import { faqCategories } from '@data/faq'
import { upload } from '@utils/constants'
import './FAQ.css'

// Divide as 9 categorias em 2 colunas equilibradas (modo normal, sem busca):
// Esquerda: 5 categorias · Direita: 4 categorias
const LEFT_COUNT = 5
const leftCats = faqCategories.slice(0, LEFT_COUNT)
const rightCats = faqCategories.slice(LEFT_COUNT)

function FaqCategory({ cat }) {
  return (
    <section className="faq-cat">
      <h2 className="faq-cat__title">{cat.category}</h2>
      <Accordion items={cat.items} defaultOpen={-1} />
    </section>
  )
}

export default function FAQ() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  // Filtra categorias/itens por título E corpo (case-insensitive).
  const filtered = useMemo(() => {
    if (!q) return null
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (it) => it.title.toLowerCase().includes(q) || it.body.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [q])

  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about training, programs, pricing, scheduling, and getting started at Formula Fitness."
        path="/faq"
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know before you get started."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />

      <div className="section">
        <div className="container">
          {/* Busca */}
          <div className="faq-search">
            <svg className="faq-search__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              className="faq-search__input"
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQs"
            />
            {query && (
              <button
                type="button"
                className="faq-search__clear"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Modo normal — 2 colunas */}
          {!q && (
            <div className="faq-page">
              <div className="faq-col">
                {leftCats.map((cat) => <FaqCategory key={cat.category} cat={cat} />)}
              </div>
              <div className="faq-col">
                {rightCats.map((cat) => <FaqCategory key={cat.category} cat={cat} />)}
              </div>
            </div>
          )}

          {/* Modo busca — resultados com itens que dão match auto-expandidos */}
          {q && filtered.length > 0 && (
            <div className="faq-results">
              {filtered.map((cat) => (
                <section className="faq-cat" key={cat.category}>
                  <h2 className="faq-cat__title">{cat.category}</h2>
                  <Accordion key={cat.category + q} items={cat.items} defaultOpen="all" multiple />
                </section>
              ))}
            </div>
          )}

          {/* Estado vazio */}
          {q && filtered.length === 0 && (
            <div className="faq-empty">
              <h2 className="faq-empty__title">No questions found</h2>
              <p className="faq-empty__text">
                We couldn’t find anything matching “{query}”. Try another term, or reach out and
                we’ll answer you personally.
              </p>
              <ConsultLink className="btn btn-primary">Book a Consultation</ConsultLink>
            </div>
          )}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
