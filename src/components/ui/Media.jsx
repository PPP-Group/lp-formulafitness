import './Media.css'

/**
 * Image — wrapper com aspect ratio, object-fit e lazy loading.
 *
 * @param {string} src
 * @param {string} alt
 * @param {string} aspectRatio — ex: '16/9', '1/1', '4/3' (CSS aspect-ratio)
 * @param {'cover'|'contain'|'fill'} fit
 * @param {boolean} lazy
 */
export function Image({
  src,
  alt = '',
  aspectRatio = '16/9',
  fit = 'cover',
  lazy = true,
  className = '',
  ...props
}) {
  return (
    <div
      className={`ds-image ds-image--${fit} ${className}`}
      style={{ aspectRatio }}
    >
      <img src={src} alt={alt} loading={lazy ? 'lazy' : 'eager'} {...props} />
    </div>
  )
}

/**
 * Icon — wrapper para SVGs inline.
 * O projeto usa inline SVGs; passe o SVG como children.
 *
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'} size
 * @param {'brand'|'muted'|'inverse'} color
 */
export function Icon({ size = 'md', color, className = '', children, ...props }) {
  const cls = ['ds-icon', `ds-icon--${size}`, color && `ds-icon--${color}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={cls} aria-hidden="true" {...props}>
      {children}
    </span>
  )
}

/**
 * Avatar — imagem circular com fallback de iniciais.
 *
 * @param {string} src       — URL da imagem (opcional)
 * @param {string} alt       — texto alternativo
 * @param {string} initials  — até 2 letras usadas como fallback
 * @param {'xs'|'sm'|'md'|'lg'|'xl'|'2xl'} size
 */
export function Avatar({ src, alt = '', initials = '', size = 'md', className = '', ...props }) {
  return (
    <span className={`avatar avatar--${size} ${className}`} {...props}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="avatar__initials" aria-label={alt || initials}>
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  )
}
