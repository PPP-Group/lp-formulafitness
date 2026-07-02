import { useRef, useState, useEffect } from 'react'
import './AutoplayVideo.css'

export default function AutoplayVideo({ src, poster }) {
  const videoRef = useRef(null)
  const [unmuted, setUnmuted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const handleSoundOn = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.muted = false
    video.play()
    setUnmuted(true)
  }

  return (
    <div className="autoplay-video">
      <video
        ref={videoRef}
        className="autoplay-video__player"
        src={src}
        poster={poster}
        playsInline
        muted
        loop={!unmuted}
        controls={unmuted}
      />
      {!unmuted && (
        <div className="autoplay-video__overlay">
          <button
            type="button"
            className="btn btn-primary autoplay-video__sound-btn"
            onClick={handleSoundOn}
          >
            <SoundOnIcon />
            Click to turn sound on
          </button>
        </div>
      )}
    </div>
  )
}

function SoundOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  )
}
