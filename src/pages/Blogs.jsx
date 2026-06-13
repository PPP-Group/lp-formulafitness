import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { posts } from '@data/blog'
import { upload } from '@utils/constants'
import './Blogs.css'

export default function Blogs() {
  return (
    <>
      <Seo
        title="Blogs"
        description="Insights, tips, and stories from the Formula Fitness team to support your fitness journey."
        path="/blogs"
      />
      <PageHero
        eyebrow="Latest News"
        title="Blogs"
        description="Insights, tips, and stories to support your fitness journey."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />
      <div className="section">
        <div className="container blog__grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link to={`/blogs/${post.slug}`} className="blog-card__media">
                <img src={post.image} alt={post.title} loading="lazy" />
              </Link>
              <div className="blog-card__body">
                <span className="blog-card__date">{post.date}</span>
                <h2 className="blog-card__title">
                  <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <Link to={`/blogs/${post.slug}`} className="btn-link">
                  Read More »
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
