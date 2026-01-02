import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blogPosts';

const blogPosts = getAllBlogPosts();

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 cosmic-bg">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Numerology <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              Explore guides, tutorials, and deep insights into the world of numerology
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass-strong rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl sm:text-5xl">
                    {post.image}
                  </div>
                  <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-primary/20 text-primary-light rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-white/50">{post.readTime}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-gradient transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-white/50 text-xs">{post.date}</span>
                      <span className="text-primary text-sm group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
