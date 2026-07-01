import { useParams, Link, Navigate } from 'react-router-dom'
import ConsultLink from '@components/ui/ConsultLink'
import Seo from '@components/ui/Seo'
import ConsultCTA from '@components/sections/ConsultCTA'
import { getPost } from '@data/blog'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blogs" replace />

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

        <div className="container post__body">
          {post.content.map((block, i) =>
            block.h ? (
              <h2 key={i}>{block.h}</h2>
            ) : (
              <p key={i}>{block.p}</p>
            )
          )}
          <div className="post__cta">
            <ConsultLink className="btn btn-primary">
              Book a Consultation
            </ConsultLink>
          </div>
        </div>
      </article>
      <ConsultCTA />
    </>
  )
}
