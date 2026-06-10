import SectionTitle from '@components/ui/SectionTitle'
import './ReviewsGrid.css'

// Grade de depoimentos no estilo Yelp: vários cards de uma vez, cada um com
// texto, avatar, nome, 5 estrelas e o selo do Yelp. Fundo escuro opcional (imagem).
export default function ReviewsGrid({ items, title, eyebrow, image, hero = false }) {
  const style = image
    ? { backgroundImage: `linear-gradient(rgba(12,16,24,.86), rgba(12,16,24,.9)), url(${image})` }
    : undefined

  return (
    <section
      className={`reviews-grid ${image ? 'reviews-grid--image' : ''} ${hero ? 'reviews-grid--hero' : ''}`}
      style={style}
    >
      <div className="container">
        {title && (
          <div className="reviews-grid__head">
            <SectionTitle eyebrow={eyebrow} title={title} align="center" as={hero ? 'h1' : 'h2'} />
          </div>
        )}

        <div className="reviews-grid__grid">
          {items.map((r) => (
            <article className="yreview" key={r.id || r.name}>
              <p className="yreview__text">{r.text}</p>
              <div className="yreview__footer">
                <div className="yreview__person">
                  {r.avatar && (
                    <img className="yreview__avatar" src={r.avatar} alt={r.name} loading="lazy" />
                  )}
                  <div className="yreview__meta">
                    <span className="yreview__name">{r.name}</span>
                    <Stars />
                  </div>
                </div>
                <span className="yreview__yelp" aria-label="Review from Yelp">
                  yelp
                  <span className="yreview__yelp-dot" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stars() {
  return (
    <div className="yreview__stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.62-5.18 4.55 1.55 6.7L12 17.27 5.88 20.73l1.55-6.7L2.25 8.88l6.85-.62L12 2z" />
        </svg>
      ))}
    </div>
  )
}
