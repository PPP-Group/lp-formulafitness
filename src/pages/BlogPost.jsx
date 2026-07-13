import { useParams, Link, Navigate } from 'react-router-dom'
import ConsultLink from '@components/ui/ConsultLink'
import Seo from '@components/ui/Seo'
import ConsultCTA from '@components/sections/ConsultCTA'
import { getPost, posts } from '@data/blog'
import { shortTestimonials } from '@data/testimonials'
import './BlogPost.css'

function RelatedPostCard({ post }) {
  return (
    <li className="post__related-card">
      <Link to={`/blogs/${post.slug}`} className="post__related-media">
        <img src={post.image} alt={post.title} loading="lazy" />
      </Link>
      <div className="post__related-body">
        <span className="post__related-date">{post.date}</span>
        <h3 className="post__related-title">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
      </div>
    </li>
  )
}

function MiniTestimonialCard({ item }) {
  return (
    <li className="post__mini-testimonial">
      <p className="post__mini-testimonial-quote">&quot;{item.text}&quot;</p>
      <span className="post__mini-testimonial-name">{item.name}</span>
    </li>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blogs" replace />

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const sidebarTestimonials = shortTestimonials.slice(0, 2)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} />
      <article className="post">
        <header className="post__header">
          <div className="container">
            <Link to="/blogs" className="btn-link post__back">
              ‹ Back to Blogs
            </Link>
            <span className="post__date">{post.date}</span>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__byline">by {post.author}</p>
          </div>
        </header>

        <div className="container post__hero">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="container post__layout">
          <div className="post__main">
            {post.content.map((block, i) => {
              if (block.h) return <h2 key={i}>{block.h}</h2>
              if (block.list) {
                return (
                  <ul className="post__list" key={i}>
                    {block.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i}>{block.p}</p>
            })}
            <div className="post__cta">
              <ConsultLink className="btn btn-primary">
                Book a Consultation
              </ConsultLink>
            </div>
          </div>

          <aside className="post__sidebar">
            {relatedPosts.length > 0 && (
              <section className="post__sidebar-section">
                <h2 className="post__sidebar-title">More Articles</h2>
                <ul className="post__related-list">
                  {relatedPosts.map((p) => (
                    <RelatedPostCard post={p} key={p.slug} />
                  ))}
                </ul>
              </section>
            )}

            {sidebarTestimonials.length > 0 && (
              <section className="post__sidebar-section">
                <h2 className="post__sidebar-title">What Members Say</h2>
                <ul className="post__mini-testimonial-list">
                  {sidebarTestimonials.map((t) => (
                    <MiniTestimonialCard item={t} key={t.id} />
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </article>
      <ConsultCTA />
    </>
  )
}
