import './VideoCard.css'

// Card de vídeo: thumbnail do YouTube + botão de play sobreposto.
export default function VideoCard({ videoId, name, quote, onPlay, thumb: thumbProp }) {
  const thumb = thumbProp || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <article className="video-card">
      <button
        type="button"
        className="video-card__thumb"
        onClick={() => onPlay(videoId, name)}
        aria-label={`Play ${name}`}
      >
        <img src={thumb} alt={name} loading="lazy" decoding="async" />
        <span className="video-card__play" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
      <div className="video-card__body">
        <h3 className="video-card__name">{name}</h3>
        <p className="video-card__quote">{quote}</p>
      </div>
    </article>
  )
}
