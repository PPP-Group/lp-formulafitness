import './Typography.css'

const TAG_TO_SIZE = { h1: '1', h2: '2', h3: '3', h4: '4', h5: '5', h6: '6' }

/**
 * Heading — renderiza h1–h6 (ou display) com o estilo correto.
 *
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} as  — tag HTML
 * @param {'1'|'2'|'3'|'4'|'5'|'6'|'display'} size — escala visual (default: deriva da tag)
 * @param {'normal'|'medium'|'semibold'|'bold'} weight
 * @param {'brand'|'muted'|'inverse'} color
 */
export function Heading({ as: Tag = 'h2', size, weight, color, className = '', children, ...props }) {
  const derivedSize = size || TAG_TO_SIZE[Tag] || '2'
  const cls = [
    'heading',
    `heading--${derivedSize}`,
    weight && `heading--${weight}`,
    color && `heading--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  )
}

/**
 * Text — bloco de texto com variantes semânticas.
 *
 * @param {'body'|'lead'|'small'|'caption'|'label'} variant
 * @param {'brand'|'secondary'|'muted'|'inverse'|'success'|'warning'|'error'} color
 * @param {string} as — tag HTML (default: 'p')
 */
export function Text({ as: Tag = 'p', variant = 'body', color, className = '', children, ...props }) {
  const cls = [
    'text',
    `text--${variant}`,
    color && `text--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  )
}

/**
 * Code — trecho de código inline ou bloco.
 *
 * @param {boolean} block — se true renderiza <pre><code>, senão <code> inline
 */
export function Code({ block = false, className = '', children, ...props }) {
  if (block) {
    return (
      <pre className={`code code--block ${className}`} {...props}>
        <code>{children}</code>
      </pre>
    )
  }
  return (
    <code className={`code code--inline ${className}`} {...props}>
      {children}
    </code>
  )
}
