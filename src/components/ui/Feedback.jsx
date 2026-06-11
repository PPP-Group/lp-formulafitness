import './Feedback.css'

/**
 * Badge — rótulo de estado ou categoria.
 *
 * @param {'primary'|'brand'|'success'|'warning'|'error'|'neutral'|'navy'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export function Badge({ variant = 'primary', size = 'md', className = '', children, ...props }) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`} {...props}>
      {children}
    </span>
  )
}

/**
 * Tag — rótulo removível (ex: filtros, categorias selecionadas).
 *
 * @param {() => void} onRemove — se fornecido, mostra botão ×
 */
export function Tag({ onRemove, className = '', children, ...props }) {
  return (
    <span className={`ds-tag ${className}`} {...props}>
      {children}
      {onRemove && (
        <button type="button" className="ds-tag__remove" onClick={onRemove} aria-label="Remove">
          ×
        </button>
      )}
    </span>
  )
}

/**
 * Spinner — indicador de carregamento circular.
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {'brand'|'white'|'muted'} color
 * @param {string} label — texto para screen readers (default: 'Loading')
 */
export function Spinner({ size = 'md', color = 'brand', label = 'Loading', className = '', ...props }) {
  return (
    <span
      className={`spinner spinner--${size} spinner--${color} ${className}`}
      role="status"
      aria-label={label}
      {...props}
    />
  )
}

/**
 * Skeleton — placeholder de loading para conteúdo ainda não carregado.
 *
 * @param {'line'|'block'|'circle'} variant
 * @param {string|number} width  — largura (ex: '60%', 200)
 * @param {string|number} height — altura
 */
export function Skeleton({ variant = 'line', width, height, className = '', ...props }) {
  return (
    <span
      className={`skeleton skeleton--${variant} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
      {...props}
    />
  )
}
