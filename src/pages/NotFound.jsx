import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/" />
      <section className="notfound">
        <div className="container notfound__inner">
          <span className="notfound__code">404</span>
          <h1 className="notfound__title">Page Not Found</h1>
          <p className="notfound__text">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
