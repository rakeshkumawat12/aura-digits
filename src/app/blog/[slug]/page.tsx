import { Navbar } from '@/components/layout/Navbar';
import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

// Mock blog data - in a real app, this would come from a CMS or database
const getBlogPost = (slug: string): BlogPost | null => {
  const posts: Record<string, BlogPost> = {
    'understanding-life-path-numbers': {
      title: 'Understanding Life Path Numbers: Your Numerological Blueprint',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Basics',
      image: '🔢',
      content: `
        <h2>What is a Life Path Number?</h2>
        <p>Your Life Path Number is the most important number in your numerology chart. It reveals your core purpose, natural talents, and the journey you are meant to take in this lifetime. Think of it as your soul's GPS - guiding you toward your ultimate destination.</p>

        <h2>How to Calculate Your Life Path Number</h2>
        <p>Calculating your Life Path Number is simple. You reduce your birth date to a single digit by adding all the numbers together. For example, if you were born on July 20, 1990:</p>
        <ul>
          <li>Month: 7</li>
          <li>Day: 20 = 2 + 0 = 2</li>
          <li>Year: 1990 = 1 + 9 + 9 + 0 = 19 = 1 + 9 = 10 = 1 + 0 = 1</li>
          <li>Life Path: 7 + 2 + 1 = 10 = 1 + 0 = 1</li>
        </ul>

        <h2>The Nine Life Path Numbers</h2>
        <p>Each Life Path Number from 1-9 carries unique characteristics:</p>

        <h3>Life Path 1: The Leader</h3>
        <p>Independent, innovative, and ambitious. Natural-born leaders who forge their own path.</p>

        <h3>Life Path 2: The Peacemaker</h3>
        <p>Diplomatic, intuitive, and cooperative. Excel in partnerships and harmonious environments.</p>

        <h3>Life Path 3: The Creative</h3>
        <p>Expressive, optimistic, and artistic. Natural communicators and entertainers.</p>

        <h2>Master Numbers</h2>
        <p>Master Numbers (11, 22, 33) are not reduced to single digits as they carry special spiritual significance. If your calculation results in these numbers, you have heightened potential and karmic responsibilities.</p>

        <h2>Living Your Life Path</h2>
        <p>Understanding your Life Path Number is just the beginning. The real work lies in aligning your daily choices, career, and relationships with your numerological blueprint. Use this knowledge as a compass, not a cage.</p>
      `,
    },
    'mulank-personality-traits': {
      title: 'Mulank Numbers 1-9: Complete Personality Guide',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Deep Dive',
      image: '⭐',
      content: `
        <h2>Understanding Mulank (Driver Number)</h2>
        <p>Your Mulank, also known as the Driver Number or Birth Number, is derived from your birth date and represents your core personality. It influences how you navigate life, make decisions, and interact with others.</p>

        <h2>Mulank 1: The Pioneer</h2>
        <p><strong>Traits:</strong> Leadership, independence, innovation, ambition</p>
        <p><strong>Strengths:</strong> Natural leaders, highly motivated, original thinkers</p>
        <p><strong>Challenges:</strong> Can be domineering, impatient, or overly competitive</p>

        <h2>Mulank 2: The Diplomat</h2>
        <p><strong>Traits:</strong> Sensitivity, cooperation, intuition, harmony</p>
        <p><strong>Strengths:</strong> Great mediators, empathetic, work well in teams</p>
        <p><strong>Challenges:</strong> Overly sensitive, indecisive, avoid confrontation</p>

        <h2>Mulank 3: The Communicator</h2>
        <p><strong>Traits:</strong> Creativity, expression, optimism, sociability</p>
        <p><strong>Strengths:</strong> Excellent communicators, artistic, inspire others</p>
        <p><strong>Challenges:</strong> Can be scattered, superficial, or overly talkative</p>

        <h2>Finding Balance</h2>
        <p>Every Mulank number has both strengths and challenges. The key is to embrace your natural gifts while being aware of potential pitfalls. Use numerology as a tool for self-awareness and personal growth.</p>
      `,
    },
  };

  return posts[slug] || null;
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-8"
            >
              ← Back to Blog
            </Link>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm">
                <span className="px-4 py-1.5 bg-primary/20 text-primary-light rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-white/50">{post.readTime}</span>
                <span className="text-white/50">{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {post.title}
              </h1>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center text-8xl">
                {post.image}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="glass-strong rounded-3xl p-8 md:p-12">
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-white/70 prose-ul:space-y-2
                  prose-li:text-white/70
                  prose-strong:text-white prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-12 glass rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">Share This Article</h3>
              <div className="flex gap-4 justify-center">
                <button className="glass border border-white/20 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all">
                  Twitter
                </button>
                <button className="glass border border-white/20 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all">
                  Facebook
                </button>
                <button className="glass border border-white/20 rounded-lg px-6 py-3 text-white hover:bg-white/10 transition-all">
                  LinkedIn
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 glass-strong rounded-3xl p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Discover Your Numbers
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Ready to unlock insights about your life path? Get your free numerology reading now
              </p>
              <Link href="/calculator" className="btn-secondary inline-block">
                Calculate Your Numbers ✨
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
