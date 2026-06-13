import { partners } from '@data/services'
import './Partners.css'

// "OUR PARTNERS" — marquee infinito de logos (CSS puro).
// Cada metade repete a lista 3x para sempre exceder a largura da tela (inclusive
// monitores largos/ultrawide), evitando espaços vazios; duas metades idênticas
// garantem o loop seamless via translateX(-50%).
export default function Partners() {
  const half = [...partners, ...partners, ...partners]
  const loop = [...half, ...half]

  return (
    <section className="partners" aria-label="Our partners">
      <div className="container">
        <h2 className="partners__heading">Our Partners</h2>
      </div>
      <div className="partners__viewport">
        <div className="partners__track">
          {loop.map((src, i) => (
            <span className="partners__logo" key={i} aria-hidden={i >= partners.length}>
              <img src={src} alt={i < partners.length ? 'Partner logo' : ''} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
