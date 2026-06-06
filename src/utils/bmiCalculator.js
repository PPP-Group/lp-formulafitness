// Cálculo de BMI e classificação por categoria.
// Aceita unidades imperiais (lbs/ft+in) ou métricas (kg/cm).

const LB_TO_KG = 0.45
const FT_TO_CM = 30.48
const IN_TO_CM = 2.54

export function calculateBMI({ unit, weight, heightPrimary, heightSecondary }) {
  const w = Number(weight)
  const hp = Number(heightPrimary)
  const hs = Number(heightSecondary) || 0

  if (!w || !hp) return null

  let kg
  let cm

  if (unit === 'imperial') {
    kg = w * LB_TO_KG
    cm = hp * FT_TO_CM + hs * IN_TO_CM
  } else {
    kg = w
    cm = hp
  }

  if (cm <= 0) return null

  const meters = cm / 100
  const bmi = kg / (meters * meters)

  return { value: Math.round(bmi * 10) / 10, ...classify(bmi) }
}

function classify(bmi) {
  if (bmi < 18.5) return { category: 'Underweight', tone: 'low' }
  if (bmi < 25) return { category: 'Healthy', tone: 'healthy' }
  if (bmi < 30) return { category: 'Overweight', tone: 'high' }
  return { category: 'Obese', tone: 'obese' }
}
