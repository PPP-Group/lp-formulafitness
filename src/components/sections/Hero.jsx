import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__title anim-fade-up" style={{ animationDelay: '0ms' }}>
          Optimal Training.
          <br />
          <span className="text-accent">Sustainable Results.</span>
        </h1>
        <p className="hero__text anim-fade-up" style={{ animationDelay: '150ms' }}>
          Formula Fitness takes an innovative, client-first approach to health and wellness.
          It&apos;s more than personal training. We focus on your whole health: stress management,
          sleep routines, diet/nutrition, and fitness goals.
        </p>
        <div className="hero__actions anim-fade-up" style={{ animationDelay: '300ms' }}>
          <a href="#consult" className="btn btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
