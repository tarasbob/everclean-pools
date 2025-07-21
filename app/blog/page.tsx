import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "10 Signs Your Pool Needs Professional Attention",
    excerpt: "Learn to recognize the warning signs that indicate your pool requires expert care before small issues become costly repairs.",
    category: "Maintenance Tips",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070",
    featured: true,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Pool Chemical Balance",
    excerpt: "Understanding pH, alkalinity, and chlorine levels is crucial for a safe and comfortable swimming experience. Here's everything you need to know.",
    category: "Water Chemistry",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=2070",
    featured: true,
  },
  {
    id: 3,
    title: "Preparing Your Pool for Summer: A Complete Checklist",
    excerpt: "Get your pool ready for the swimming season with our comprehensive opening guide. Don't miss these essential steps!",
    category: "Seasonal Guide",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    featured: false,
  },
  {
    id: 4,
    title: "Green Pool Recovery: From Algae to Crystal Clear",
    excerpt: "Discover the step-by-step process professionals use to transform green, algae-filled pools back to pristine condition.",
    category: "Problem Solving",
    date: "2023-12-28",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1624640243943-0bbe2c661b23?q=80&w=2070",
    featured: false,
  },
  {
    id: 5,
    title: "Pool Equipment Maintenance: Extend Your Investment",
    excerpt: "Regular maintenance of pumps, filters, and heaters can double their lifespan. Learn the best practices from our experts.",
    category: "Equipment Care",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1528495612343-9ca9f755a74e?q=80&w=2074",
    featured: false,
  },
  {
    id: 6,
    title: "Winter Pool Care: Protecting Your Investment",
    excerpt: "Proper winterization prevents damage and makes spring opening easier. Follow our professional closing procedures.",
    category: "Seasonal Guide",
    date: "2023-12-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1562113637-bbb28fa79c70?q=80&w=1974",
    featured: false,
  },
];

const categories = [
  "All Posts",
  "Maintenance Tips",
  "Water Chemistry",
  "Seasonal Guide",
  "Problem Solving",
  "Equipment Care",
];

export default function Blog() {
  return (
    <>
      <Hero
        title="Pool Care Tips & Resources"
        subtitle="EverClean Blog"
        description="Expert advice, seasonal guides, and industry insights to help you maintain a perfect pool."
        primaryCTA={{ text: "Subscribe to Updates", href: "/contact" }}
        backgroundImage="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2070"
      />

      {/* Featured Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and timely pool care resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pool-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-charcoal mb-3 group-hover:text-pool-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-pool-blue font-medium group-hover:text-deep-aqua transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-4">
              All Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-pool-blue hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="text-pool-blue font-medium">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-charcoal mb-2 group-hover:text-pool-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <ArrowRight className="h-4 w-4 text-pool-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-deep-aqua">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Get Pool Care Tips Delivered
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Subscribe to our newsletter for seasonal reminders, maintenance tips, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-pool-blue"
              />
              <Button type="submit" variant="primary" className="bg-white text-deep-aqua hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-200">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 