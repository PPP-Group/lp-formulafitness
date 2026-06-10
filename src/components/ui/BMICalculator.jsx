import { useState } from 'react'
import { calculateBMI } from '@utils/bmiCalculator'
import './BMICalculator.css'

const initialForm = {
  unit: 'metric',
  weight: '',
  heightPrimary: '',
  heightSecondary: '',
}

export default function BMICalculator() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setResult(null) // Clear result when typing
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      // Passa "male" por default já que não tem mais o toggle no UI
      setResult(calculateBMI({ ...form, sex: 'male' }))
      setLoading(false)
    }, 300)
  }

  const isMetric = form.unit === 'metric'

  return (
    <div className="bmi">
      <form className="bmi__form" onSubmit={onSubmit}>
        <div className="bmi__top-toggle">
          <button
            type="button"
            className={isMetric ? 'is-active' : ''}
            onClick={() => update('unit', 'metric')}
          >
            Metric
          </button>
          <button
            type="button"
            className={!isMetric ? 'is-active' : ''}
            onClick={() => update('unit', 'imperial')}
          >
            Imperial
          </button>
        </div>

        <label className="bmi__field">
          <span className="bmi__label">HEIGHT ({isMetric ? 'CM' : 'FT'})</span>
          <div className="bmi__input-wrapper">
            <input
              className="form-input"
              type="number"
              inputMode="decimal"
              min="0"
              value={form.heightPrimary}
              onChange={(e) => update('heightPrimary', e.target.value)}
              placeholder={isMetric ? 'e.g. 175' : 'e.g. 5'}
              required
            />
          </div>
        </label>
        
        {!isMetric && (
          <label className="bmi__field">
            <span className="bmi__label">HEIGHT (IN)</span>
            <div className="bmi__input-wrapper">
              <input
                className="form-input"
                type="number"
                inputMode="decimal"
                min="0"
                max="11"
                value={form.heightSecondary}
                onChange={(e) => update('heightSecondary', e.target.value)}
                placeholder="e.g. 10"
              />
            </div>
          </label>
        )}

        <label className="bmi__field">
          <span className="bmi__label">WEIGHT ({isMetric ? 'KG' : 'LBS'})</span>
          <div className="bmi__input-wrapper">
            <input
              className="form-input"
              type="number"
              inputMode="decimal"
              min="0"
              value={form.weight}
              onChange={(e) => update('weight', e.target.value)}
              placeholder={isMetric ? 'e.g. 75' : 'e.g. 160'}
              required
            />
          </div>
        </label>

        <button type="submit" className="btn btn-primary bmi__submit" disabled={loading}>
          {loading ? 'CALCULATING...' : 'CALCULATE BMI'}
        </button>
      </form>

      {result && (
        <div className={`bmi__result is-${result.tone}`} aria-live="polite">
          <span className="bmi__result-label">Result:</span>
          <span className="bmi__result-value">{result.value}</span>
          <span className="bmi__result-category">{result.category}</span>
        </div>
      )}
    </div>
  )
}
