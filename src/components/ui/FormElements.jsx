import './FormElements.css'

/**
 * Input — campo de texto com label, helper e estado de erro integrados.
 *
 * @param {string} id — obrigatório para acessibilidade
 * @param {'text'|'email'|'password'|'number'|'tel'} type
 * @param {string} label
 * @param {string} helper — texto de ajuda abaixo do campo
 * @param {string} error  — mensagem de erro (substitui helper)
 * @param {boolean} required
 */
export function Input({
  id,
  type = 'text',
  label,
  helper,
  error,
  required = false,
  className = '',
  ...props
}) {
  const inputCls = ['form-input', error && 'form-input--error', className].filter(Boolean).join(' ')

  return (
    <div className="field">
      {label && (
        <label className={`field__label${required ? ' field__label--required' : ''}`} htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} type={type} className={inputCls} required={required} aria-describedby={error ? `${id}-error` : helper ? `${id}-helper` : undefined} {...props} />
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
      {!error && helper && (
        <span id={`${id}-helper`} className="field__helper">
          {helper}
        </span>
      )}
    </div>
  )
}

/**
 * Textarea — campo multi-linha com label e estado de erro.
 *
 * @param {boolean} noResize — desativa redimensionamento manual
 * @param {number} rows
 */
export function Textarea({
  id,
  label,
  helper,
  error,
  required = false,
  noResize = false,
  rows = 4,
  className = '',
  ...props
}) {
  const cls = [
    'form-input',
    noResize && 'form-input--no-resize',
    error && 'form-input--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="field">
      {label && (
        <label className={`field__label${required ? ' field__label--required' : ''}`} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea id={id} className={cls} rows={rows} required={required} aria-describedby={error ? `${id}-error` : helper ? `${id}-helper` : undefined} {...props} />
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
      {!error && helper && (
        <span id={`${id}-helper`} className="field__helper">
          {helper}
        </span>
      )}
    </div>
  )
}

/**
 * Select — dropdown customizado com label e estado de erro.
 *
 * @param {Array<{value: string, label: string}>} options
 * @param {string} placeholder — option desabilitada no topo
 */
export function Select({
  id,
  label,
  helper,
  error,
  required = false,
  options = [],
  placeholder = 'Select…',
  className = '',
  ...props
}) {
  const cls = ['form-input', 'form-select', error && 'form-input--error', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="field">
      {label && (
        <label className={`field__label${required ? ' field__label--required' : ''}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="form-select-wrapper">
        <select id={id} className={cls} required={required} defaultValue="" aria-describedby={error ? `${id}-error` : helper ? `${id}-helper` : undefined} {...props}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span id={`${id}-error`} className="field__error" role="alert">
          {error}
        </span>
      )}
      {!error && helper && (
        <span id={`${id}-helper`} className="field__helper">
          {helper}
        </span>
      )}
    </div>
  )
}
