import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return;

  return {
    title: `${post.title} | MotorHomeInsurance.co.nz`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://motorhomeinsurance.co.nz' },
    { name: 'Blog', url: 'https://motorhomeinsurance.co.nz/blog' },
    { name: post.title, url: `https://motorhomeinsurance.co.nz/blog/${slug}` }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MotorHomeInsurance.co.nz',
      logo: {
        '@type': 'ImageObject',
        url: 'https://motorhomeinsurance.co.nz/logo.png',
      },
    },
    description: post.excerpt,
  };

  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-semibold mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:ml-6 [&_li]:mb-2"
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-4">Found this helpful? Share it with your network.</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://motorhomeinsurance.co.nz/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  Share on Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://motorhomeinsurance.co.nz/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-semibold"
                >
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://motorhomeinsurance.co.nz/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-semibold"
                >
                  Share on LinkedIn
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-sky-300 transition-all"
                    >
                      <div className="h-40 overflow-hidden bg-slate-200">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 group-hover:text-sky-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2">
                          {new Date(relatedPost.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QuoteForm mode="compact" />

            {/* Author Bio */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">About the Author</h4>
              <p className="text-sm text-slate-700">
                {post.author} is New Zealand's trusted source for motorhome insurance information, helping Kiwis find the right coverage for their motorhomes.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-8 space-y-3">
              <Link href="/faqs" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                View FAQs
              </Link>
              <Link href="/coverage" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                Coverage Guide
              </Link>
              <Link href="/compare" className="block px-4 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center font-semibold">
                Compare Providers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
