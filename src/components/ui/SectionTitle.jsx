import './SectionTitle.css'

// Cabeçalho de seção padronizado: eyebrow + título + descrição opcional.
export default function SectionTitle({ eyebrow, title, description, align = 'left', as: Tag = 'h2' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-title">{title}</Tag>
      {description && <p className="section-subtitle">{description}</p>}
    </div>
  )
}
