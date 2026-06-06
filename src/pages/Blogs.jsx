import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import './Blogs.css'

const posts = [
  {
    id: 'expect',
    title: 'What You Can Expect at Formula Fitness',
    excerpt:
      'A look inside our client-first approach — from your first consultation to your first transformation.',
    date: 'Coming soon · 1/25/2026',
  },
]

export default function Blogs() {
  return (
    <>
      <Seo
        title="Blogs"
        description="Insights, tips, and stories from the Formula Fitness team."
        path="/blogs"
      />
      <PageHero
        eyebrow="Latest News"
        title="From the Blog"
        description="Insights, tips, and stories to support your fitness journey."
      />
      <div className="section">
        <div className="container blog__grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-card__media" />
              <div className="blog-card__body">
                <span className="blog-card__date">{post.date}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
