import './Button.css'

/**
 * Button — componente base para todas as ações interativas.
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'|'link'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading  — mostra spinner e bloqueia interação
 * @param {boolean} disabled
 * @param {ReactNode} leftIcon  — ícone antes do label
 * @param {ReactNode} rightIcon — ícone depois do label
 * @param {string} as — tag ou componente a renderizar ('button', 'a', Link…)
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  as: Tag = 'button',
  type = 'button',
  className = '',
  children,
  ...props
}) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size !== 'md' && `btn--${size}`,
    loading && 'btn--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      className={cls}
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      aria-disabled={Tag !== 'button' && (disabled || loading) ? true : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {!loading && leftIcon && (
        <span className="btn__icon" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children}
      {!loading && rightIcon && (
        <span className="btn__icon" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </Tag>
  )
}
