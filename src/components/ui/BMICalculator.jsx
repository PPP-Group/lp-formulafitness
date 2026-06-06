import { useState } from 'react'
import { calculateBMI } from '@utils/bmiCalculator'
import './BMICalculator.css'

const initialForm = {
  sex: 'male',
  unit: 'imperial',
  weight: '',
  heightPrimary: '',
  heightSecondary: '',
}

export default function BMICalculator() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Pequeno delay para o estado de loading do botão (UX do site original)
    setTimeout(() => {
      setResult(calculateBMI(form))
      setLoading(false)
    }, 300)
  }

  const isImperial = form.unit === 'imperial'

  return (
    <div className="bmi">
      <form className="bmi__form" onSubmit={onSubmit}>
        <div className="bmi__row">
          <span className="bmi__label">Sex</span>
          <div className="bmi__toggle">
            {['male', 'female'].map((s) => (
              <button
                key={s}
                type="button"
                className={form.sex === s ? 'is-active' : ''}
                onClick={() => update('sex', s)}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bmi__row">
          <span className="bmi__label">Units</span>
          <div className="bmi__toggle">
            <button
              type="button"
              className={isImperial ? 'is-active' : ''}
              onClick={() => update('unit', 'imperial')}
            >
              lbs / ft
            </button>
            <button
              type="button"
              className={!isImperial ? 'is-active' : ''}
              onClick={() => update('unit', 'metric')}
            >
              kg / cm
            </button>
          </div>
        </div>

        <label className="bmi__field">
          <span className="bmi__label">Weight ({isImperial ? 'lbs' : 'kg'})</span>
          <input
            className="form-input"
            type="number"
            inputMode="decimal"
            min="0"
            value={form.weight}
            onChange={(e) => update('weight', e.target.value)}
            placeholder={isImperial ? '160' : '73'}
            required
          />
        </label>

        <div className="bmi__height">
          <label className="bmi__field">
            <span className="bmi__label">Height ({isImperial ? 'ft' : 'cm'})</span>
            <input
              className="form-input"
              type="number"
              inputMode="decimal"
              min="0"
              value={form.heightPrimary}
              onChange={(e) => update('heightPrimary', e.target.value)}
              placeholder={isImperial ? '5' : '178'}
              required
            />
          </label>
          {isImperial && (
            <label className="bmi__field">
              <span className="bmi__label">Height (in)</span>
              <input
                className="form-input"
                type="number"
                inputMode="decimal"
                min="0"
                max="11"
                value={form.heightSecondary}
                onChange={(e) => update('heightSecondary', e.target.value)}
                placeholder="10"
              />
            </label>
          )}
        </div>

        <button type="submit" className="btn btn-primary bmi__submit" disabled={loading}>
          {loading ? 'Calculating…' : 'Calculate BMI'}
        </button>
      </form>

      <div className={`bmi__result ${result ? `is-${result.tone}` : ''}`} aria-live="polite">
        {result ? (
          <>
            <span className="bmi__result-label">Calculated Result</span>
            <span className="bmi__result-value">{result.value}</span>
            <span className="bmi__result-category">{result.category}</span>
          </>
        ) : (
          <span className="bmi__result-placeholder">
            Your result will appear here once you calculate.
          </span>
        )}
      </div>
    </div>
  )
}
