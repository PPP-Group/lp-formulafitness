import './Partners.css'

// Logos de parceiros/equipamentos. Carousel infinito em CSS puro.
const partners = ['Myzone', 'InBody', 'TRX', 'Rogue', 'Concept2', 'Hyperice', 'NASM', 'Precor']

export default function Partners() {
  // Duplicamos a lista para o loop seamless (translateX -50%).
  const loop = [...partners, ...partners]

  return (
    <section className="partners" aria-label="Our partners and equipment">
      <div className="partners__track">
        {loop.map((name, i) => (
          <span className="partners__logo" key={`${name}-${i}`} aria-hidden={i >= partners.length}>
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
