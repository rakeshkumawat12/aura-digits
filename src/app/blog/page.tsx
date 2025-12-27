import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'understanding-life-path-numbers',
    title: 'Understanding Life Path Numbers: Your Numerological Blueprint',
    excerpt: 'Discover how your Life Path Number reveals your core purpose, natural talents, and the journey you are meant to take in this lifetime.',
    category: 'Basics',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: '🔢',
  },
  {
    id: 2,
    slug: 'mulank-personality-traits',
    title: 'Mulank Numbers 1-9: Complete Personality Guide',
    excerpt: 'Deep dive into each Mulank number and what it reveals about your personality, strengths, challenges, and relationships.',
    category: 'Deep Dive',
    readTime: '8 min read',
    date: 'Dec 10, 2024',
    image: '⭐',
  },
  {
    id: 3,
    slug: 'lu-shu-grid-explained',
    title: 'The Lu Shu Grid: Ancient Chinese Numerology Wisdom',
    excerpt: 'Learn how the 3x3 Lu Shu Grid can reveal your strengths, missing numbers, and areas for personal development.',
    category: 'Advanced',
    readTime: '6 min read',
    date: 'Dec 5, 2024',
    image: '🎯',
  },
  {
    id: 4,
    slug: 'numerology-compatibility',
    title: 'Numerology Compatibility: Finding Your Perfect Match',
    excerpt: 'Explore how numerology can help you understand relationship dynamics and find compatibility with partners, friends, and colleagues.',
    category: 'Relationships',
    readTime: '7 min read',
    date: 'Nov 28, 2024',
    image: '💑',
  },
  {
    id: 5,
    slug: 'career-guidance-numerology',
    title: 'Career Guidance Through Numerology',
    excerpt: 'Use your Destiny Number to discover ideal career paths, business opportunities, and professional growth strategies.',
    category: 'Career',
    readTime: '6 min read',
    date: 'Nov 20, 2024',
    image: '💼',
  },
  {
    id: 6,
    slug: 'master-numbers-11-22-33',
    title: 'Master Numbers 11, 22, 33: Unlocking Higher Potential',
    excerpt: 'Understand the significance of Master Numbers and their powerful spiritual and karmic implications in your life.',
    category: 'Advanced',
    readTime: '7 min read',
    date: 'Nov 15, 2024',
    image: '✨',
  },
];

const categories = ['All', 'Basics', 'Deep Dive', 'Advanced', 'Relationships', 'Career'];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 cosmic-bg">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Numerology <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore guides, tutorials, and deep insights into the world of numerology
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'glass text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="glass-strong rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-white/50">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-white/50 text-sm">{post.date}</span>
                      <span className="text-primary group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-3xl p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Stay Updated
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Get the latest numerology insights, tips, and guides delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="btn-secondary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
