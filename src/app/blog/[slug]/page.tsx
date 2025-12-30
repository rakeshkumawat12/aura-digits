import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';
import { getBlogPost } from '@/data/blogPosts';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 cosmic-bg flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white">Post Not Found</h1>
            <Link href="/blog" className="btn-primary inline-block">
              Back to Blog
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 cosmic-bg">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-10 text-sm font-medium group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Blog
            </Link>

            <div className="space-y-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-4 py-1.5 bg-primary/20 text-primary-light rounded-full font-medium border border-primary/30">
                  {post.category}
                </span>
                <span className="text-white/60">{post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span className="text-white/60">{post.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight">
                {post.title}
              </h1>

              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-violet/20 rounded-3xl flex items-center justify-center text-8xl shadow-2xl border border-white/[0.05]">
                {post.image}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="glass-strong rounded-3xl p-10 sm:p-16 lg:p-20 shadow-2xl border border-white/[0.08]">
              <div
                className="prose prose-invert prose-xl max-w-none
                  prose-headings:font-display prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-10 prose-h2:first:mt-0 prose-h2:leading-[1.2] prose-h2:text-gradient
                  prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-[1.3] prose-h3:text-white/95
                  prose-p:text-white/85 prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg sm:prose-p:text-xl prose-p:font-light
                  prose-ul:my-8 prose-ul:space-y-4
                  prose-li:text-white/80 prose-li:text-lg sm:prose-li:text-xl prose-li:leading-[1.8] prose-li:pl-2 prose-li:font-light
                  prose-strong:text-white prose-strong:font-semibold prose-strong:text-white/95
                  prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:text-primary-light prose-a:transition-colors
                  [&>*:first-child]:mt-0
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-primary/60"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Related Actions / Navigation */}
            <div className="mt-16">
              <Link
                href="/blog"
                className="text-white/60 hover:text-white transition-colors text-sm font-medium group inline-flex items-center gap-2"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                View All Articles
              </Link>
            </div>

            {/* CTA Section */}
            <div className="mt-20 glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl border border-white/[0.08] relative overflow-hidden">
              {/* Decorative gradient orbs */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-gradient-to-br from-accent-violet/25 to-accent-emerald/25 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-5">
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Discover Your Numbers
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                  Ready to unlock profound insights about your life path? Get your personalized
                  numerology reading now.
                </p>
                <div className="pt-2">
                  <Link href="/calculator" className="btn-secondary inline-block text-base">
                    Calculate Your Numbers ✨
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
