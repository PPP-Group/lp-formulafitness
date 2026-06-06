import { useState, useCallback } from 'react'
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
        <SectionTitle
          eyebrow="Real Stories"
          title="Personal Training, Personal Triumphs!"
          description="Your unique goals and needs are prioritized, guiding you towards a sustainable and impactful fitness journey."
          align="center"
        />

        <div className="grid-3">
          {videoTestimonials.map((item) => (
            <VideoCard
              key={item.id}
              videoId={item.videoId}
              name={item.name}
              quote={item.quote}
              onPlay={openVideo}
            />
          ))}
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
