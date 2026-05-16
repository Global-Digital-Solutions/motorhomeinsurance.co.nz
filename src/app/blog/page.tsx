import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Motorhome Insurance Blog | MotorHomeInsurance.co.nz',
  description: 'Expert guides and insights on motorhome insurance, coverage types, cost-saving tips, and choosing the right provider for your NZ motorhome.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1596470693312-9a3686a0af0f?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Motorhome Insurance Insights</h1>
          <p className="text-xl text-slate-200">Expert guides, coverage explanations, and money-saving tips from NZ motorhome insurance specialists.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Stay Informed About Motorhome Insurance</h2>
            <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
              Get expert insights and cost-saving tips delivered to your inbox. Our guides help motorhome owners understand coverage and find better rates.
            </p>
            <p className="text-sm text-slate-600">
              Questions? <a href="mailto:hello@cover4you.co.nz" className="text-sky-600 hover:text-sky-700 font-semibold">Email our brokers</a> and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
