'use client'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'Semua', count: 24 },
    { id: 'tutorial', name: 'Tutorial', count: 8 },
    { id: 'news', name: 'Berita', count: 6 },
    { id: 'tips', name: 'Tips & Tricks', count: 5 },
    { id: 'announcement', name: 'Pengumuman', count: 3 },
    { id: 'tech', name: 'Tech Update', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Cara Menggunakan Weather API untuk Aplikasi Mobile",
      excerpt: "Panduan lengkap implementasi Weather API Pills Satriags dalam aplikasi Android dan iOS dengan contoh kode praktis.",
      category: "tutorial",
      author: "Tim Pills",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["API", "Mobile", "Weather"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Update Terbaru: News API v2.0 dengan Fitur Filter Advanced",
      excerpt: "Nikmati pengalaman baru dengan News API v2.0 yang dilengkapi filtering canggih dan response time lebih cepat.",
      category: "announcement",
      author: "Admin Pills",
      date: "2024-01-12",
      readTime: "5 min",
      tags: ["Update", "News API", "Feature"],
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Tips Optimasi Performance API untuk Production",
      excerpt: "Kumpulan best practices untuk mengoptimalkan performance API Pills Satriags di environment production.",
      category: "tips",
      author: "Dev Team",
      date: "2024-01-10",
      readTime: "12 min",
      tags: ["Performance", "Production", "Optimization"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Integrasi Location API dengan Google Maps",
      excerpt: "Step by step tutorial integrasi Location API Pills Satriags dengan Google Maps untuk aplikasi web modern.",
      category: "tutorial",
      author: "Tim Pills",
      date: "2024-01-08",
      readTime: "15 min",
      tags: ["Location", "Google Maps", "Integration"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Berita: Pills Satriags Mencapai 1 Juta Request per Hari",
      excerpt: "Milestone baru dicapai Pills Satriags dengan melayani lebih dari 1 juta API request setiap harinya.",
      category: "news",
      author: "Marketing Team",
      date: "2024-01-05",
      readTime: "3 min",
      tags: ["Milestone", "Achievement", "News"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Error Handling Best Practices untuk API Integration",
      excerpt: "Panduan komprehensif menangani error dan exception dalam integrasi API Pills Satriags.",
      category: "tips",
      author: "Dev Team",
      date: "2024-01-03",
      readTime: "10 min",
      tags: ["Error Handling", "Best Practices", "Integration"],
      image: "/api/placeholder/400/250"
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      <Navbar />
      
      {/* Animated Background Pills */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/20 rounded-full float-0"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-accent/20 rounded-full float-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-secondary/20 rounded-full float-2"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-primary/20 rounded-full float-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-accent/20 rounded-full float-1"></div>
      </div>

      <div className={`min-h-screen bg-gradient-to-br from-base-200 to-base-300 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 py-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Pills Blog
            </h1>
            <p className="text-xl text-base-content/70 mb-8">
              Tutorial, tips, dan update terbaru dari Pills Satriags API
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <figure className="h-48 bg-gradient-to-r from-primary/20 to-accent/20">
                      <div className="w-full h-full bg-base-200 flex items-center justify-center">
                        <span className="text-base-content/60">Featured Image</span>
                      </div>
                    </figure>
                    <div className="card-body">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="badge badge-primary">{categories.find(cat => cat.id === post.category)?.name}</div>
                        <div className="badge badge-ghost">{post.readTime}</div>
                      </div>
                      <h3 className="card-title line-clamp-2">{post.title}</h3>
                      <p className="text-base-content/70 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="badge badge-outline badge-sm">{tag}</span>
                        ))}
                      </div>
                      <div className="card-actions justify-between items-center mt-4">
                        <div className="text-sm text-base-content/60">
                          {post.author} • {new Date(post.date).toLocaleDateString('id-ID')}
                        </div>
                        <button className="btn btn-primary btn-sm">Baca Selengkapnya</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn btn-sm ${
                  selectedCategory === category.id 
                    ? 'btn-primary' 
                    : 'btn-outline btn-primary'
                } transition-all duration-300`}
              >
                {category.name}
                <div className="badge badge-sm ml-2">{category.count}</div>
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <figure className="h-48 bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="w-full h-full bg-base-200 flex items-center justify-center">
                    <span className="text-base-content/60">Blog Image</span>
                  </div>
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="badge badge-secondary badge-sm">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </div>
                    <div className="badge badge-ghost badge-sm">{post.readTime}</div>
                  </div>
                  <h3 className="card-title line-clamp-2 text-base">{post.title}</h3>
                  <p className="text-sm text-base-content/70 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge badge-outline badge-xs">{tag}</span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="badge badge-outline badge-xs">+{post.tags.length - 2}</span>
                    )}
                  </div>
                  <div className="card-actions justify-between items-center mt-4">
                    <div className="text-xs text-base-content/60">
                      <div>{post.author}</div>
                      <div>{new Date(post.date).toLocaleDateString('id-ID')}</div>
                    </div>
                    <button className="btn btn-primary btn-xs">Baca</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <button className="btn btn-outline btn-primary">
              Load More Posts
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center">
            <div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-xl max-w-lg mx-auto">
              <div className="card-body text-center">
                <h3 className="card-title justify-center mb-4">Subscribe to Our Blog</h3>
                <p className="mb-6">Dapatkan update terbaru tutorial, tips, dan berita Pills Satriags langsung ke email Anda</p>
                <div className="form-control">
                  <div className="input-group">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="input input-bordered flex-1" 
                    />
                    <button className="btn btn-primary">Subscribe</button>
                  </div>
                </div>
                <div className="text-xs text-base-content/60 mt-3">
                  Weekly newsletter dengan konten berkualitas. Unsubscribe kapan saja.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
