import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '@components/ui/SectionTitle'
import VideoCard from '@components/ui/VideoCard'
import Modal from '@components/ui/Modal'
import { videoTestimonials } from '@data/testimonials'

export default function VideoTestimonials() {
  const [active, setActive] = useState(null)

  const openVideo = useCallback((videoId, name) => setActive({ videoId, name }), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionTitle title="Watch These Testimonials!" align="center" />

        <div className="grid-3">
          {videoTestimonials.map((item) => (
            <VideoCard
              key={item.id}
              videoId={item.videoId}
              thumb={item.thumb}
              name={item.name}
              quote={item.quote}
              onPlay={openVideo}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
          <Link to="/testimonials" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>

      <Modal open={!!active} onClose={close} label={active?.name}>
        {active && (
          <div className="modal__video">
            <iframe
              src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0`}
              title={active.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </section>
  )
}
