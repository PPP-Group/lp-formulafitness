import './LayoutPrimitives.css'

/**
 * Container — limita largura e centraliza conteúdo.
 *
 * @param {'sm'|'md'|'lg'|'xl'|'full'} size
 */
export function Container({ size = 'lg', as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`lp-container lp-container--${size} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

/**
 * Section — wrapper de seção com padding vertical.
 *
 * @param {boolean} alt   — fundo secundário (--color-bg-secondary)
 * @param {boolean} small — padding reduzido
 * @param {boolean} flush — sem padding vertical
 */
export function Section({
  as: Tag = 'section',
  alt = false,
  small = false,
  flush = false,
  className = '',
  children,
  ...props
}) {
  const cls = [
    'lp-section',
    alt && 'lp-section--alt',
    small && 'lp-section--small',
    flush && 'lp-section--flush',
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
 * Grid — layout em grelha responsivo.
 *
 * @param {1|2|3|4} cols — número de colunas no breakpoint desktop
 * @param {'none'|'sm'|'md'|'lg'} gap
 */
export function Grid({ cols = 1, gap = 'md', as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`lp-grid lp-grid--${cols} lp-grid--gap-${gap} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

/**
 * Flex — container flexbox com props declarativas.
 *
 * @param {'row'|'col'|'row-reverse'} direction
 * @param {'start'|'center'|'end'|'stretch'} align
 * @param {'start'|'center'|'end'|'between'|'around'} justify
 * @param {'none'|'xs'|'sm'|'md'|'lg'|'xl'} gap
 * @param {boolean} wrap
 */
export function Flex({
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  gap = 'md',
  wrap = false,
  as: Tag = 'div',
  className = '',
  children,
  ...props
}) {
  const cls = [
    'lp-flex',
    `lp-flex--${direction}`,
    `lp-flex--align-${align}`,
    `lp-flex--justify-${justify}`,
    `lp-flex--gap-${gap}`,
    wrap && 'lp-flex--wrap',
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
