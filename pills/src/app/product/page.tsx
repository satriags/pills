'use client'
import Navbar from '@/components/Navbar'
import AnimatedPillsBackground from '@/components/AnimatedPillsBackground'
import { useState, useEffect } from 'react'

export default function Product() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: '🔗', count: 12 },
    { id: 'data', name: 'Data APIs', icon: '📊', count: 4 },
    { id: 'utility', name: 'Utility APIs', icon: '🛠️', count: 3 },
    { id: 'social', name: 'Social APIs', icon: '📱', count: 3 },
    { id: 'finance', name: 'Finance APIs', icon: '💰', count: 2 }
  ]

  const products = [
    {
      id: 1,
      name: "Weather API",
      category: "data",
      icon: "🌤️",
      description: "Data cuaca real-time untuk seluruh Indonesia dengan akurasi tinggi dan prediksi 7 hari",
      features: ["Real-time data", "7-day forecast", "Indonesia coverage", "High accuracy"],
      endpoint: "/api/weather",
      methods: ["GET"],
      status: "stable",
      popularity: 95
    },
    {
      id: 2,
      name: "Location API",
      category: "data",
      icon: "📍",
      description: "Informasi lengkap wilayah Indonesia dari provinsi hingga kelurahan",
      features: ["Complete Indonesia data", "Postal codes", "Coordinates", "Administrative levels"],
      endpoint: "/api/location",
      methods: ["GET"],
      status: "stable",
      popularity: 88
    },
    {
      id: 3,
      name: "Currency API",
      category: "finance",
      icon: "💱",
      description: "Nilai tukar mata uang real-time dari berbagai sumber terpercaya",
      features: ["Real-time rates", "Historical data", "Multiple sources", "100+ currencies"],
      endpoint: "/api/currency",
      methods: ["GET"],
      status: "stable",
      popularity: 92
    },
    {
      id: 4,
      name: "QR Code Generator",
      category: "utility",
      icon: "📱",
      description: "Generate QR code dengan berbagai format dan customization options",
      features: ["Multiple formats", "Custom styling", "High resolution", "Batch generation"],
      endpoint: "/api/qr",
      methods: ["GET", "POST"],
      status: "stable",
      popularity: 85
    },
    {
      id: 5,
      name: "SMS Gateway",
      category: "utility",
      icon: "💬",
      description: "Kirim SMS massal dan notifikasi dengan delivery report",
      features: ["Bulk SMS", "Delivery reports", "Templates", "Scheduling"],
      endpoint: "/api/sms",
      methods: ["POST"],
      status: "beta",
      popularity: 78
    },
    {
      id: 6,
      name: "Image Processing",
      category: "utility",
      icon: "🖼️",
      description: "Resize, compress, dan manipulasi gambar dengan AI",
      features: ["Auto resize", "Smart compression", "Format conversion", "AI enhancement"],
      endpoint: "/api/image",
      methods: ["POST"],
      status: "stable",
      popularity: 82
    },
    {
      id: 7,
      name: "Social Media Stats",
      category: "social",
      icon: "📈",
      description: "Analytics dan statistik dari berbagai platform media sosial",
      features: ["Multi-platform", "Real-time stats", "Historical data", "Export reports"],
      endpoint: "/api/social",
      methods: ["GET"],
      status: "beta",
      popularity: 75
    },
    {
      id: 8,
      name: "News API",
      category: "data",
      icon: "📰",
      description: "Berita terkini dari berbagai sumber media Indonesia",
      features: ["Real-time news", "Multiple sources", "Category filter", "Search function"],
      endpoint: "/api/news",
      methods: ["GET"],
      status: "stable",
      popularity: 90
    },
    {
      id: 9,
      name: "Crypto Prices",
      category: "finance",
      icon: "₿",
      description: "Harga cryptocurrency real-time dengan historical charts",
      features: ["Real-time prices", "Historical data", "Price alerts", "Market analysis"],
      endpoint: "/api/crypto",
      methods: ["GET"],
      status: "stable",
      popularity: 87
    },
    {
      id: 10,
      name: "URL Shortener",
      category: "utility",
      icon: "🔗",
      description: "Pependek URL dengan analytics dan custom domain support",
      features: ["Custom domains", "Click analytics", "Expiration dates", "QR codes"],
      endpoint: "/api/short",
      methods: ["GET", "POST"],
      status: "stable",
      popularity: 83
    },
    {
      id: 11,
      name: "Instagram Analytics",
      category: "social",
      icon: "📸",
      description: "Analytics mendalam untuk akun Instagram business",
      features: ["Engagement metrics", "Follower insights", "Content analysis", "Competitor tracking"],
      endpoint: "/api/instagram",
      methods: ["GET"],
      status: "beta",
      popularity: 80
    },
    {
      id: 12,
      name: "YouTube Stats",
      category: "social",
      icon: "📺",
      description: "Statistik dan analytics untuk channel YouTube",
      features: ["Channel analytics", "Video performance", "Subscriber tracking", "Revenue insights"],
      endpoint: "/api/youtube",
      methods: ["GET"],
      status: "stable",
      popularity: 86
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'badge-success'
      case 'beta': return 'badge-warning'
      case 'deprecated': return 'badge-error'
      default: return 'badge-info'
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Pills Animation */}
      <div className="min-h-[80vh] bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden pt-24">
        {/* Animated Background Pills */}
        <AnimatedPillsBackground count={20} pillSize="sm" />

        <div className="hero min-h-[80vh] relative z-10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              {/* Icon */}
              <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <span className="text-3xl">🛍️</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Produk API
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto">
                  Jelajahi koleksi lengkap API yang dirancang untuk mempercepat 
                  pengembangan aplikasi modern Anda
                </p>
              </div>

              {/* Stats */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                  <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="stat-value text-2xl text-primary">{products.length}+</div>
                    <div className="stat-title text-xs">APIs</div>
                  </div>
                  <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="stat-value text-2xl text-secondary">99.9%</div>
                    <div className="stat-title text-xs">Uptime</div>
                  </div>
                  <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="stat-value text-2xl text-accent">1M+</div>
                    <div className="stat-title text-xs">Requests</div>
                  </div>
                  <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="stat-value text-2xl text-success">24/7</div>
                    <div className="stat-title text-xs">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Kategori API</h2>
            <p className="text-lg text-base-content/80">Pilih kategori untuk melihat API yang sesuai dengan kebutuhan Anda</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn ${
                  selectedCategory === category.id ? 'btn-primary' : 'btn-outline'
                } hover:scale-105 transition-all`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="badge badge-sm ml-2">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-base-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Popularity Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="radial-progress text-primary bg-base-200 border-2 border-base-300" 
                       style={{"--value": product.popularity, "--size": "2.5rem", "--thickness": "3px"} as React.CSSProperties}>
                    <span className="text-xs font-bold">{product.popularity}</span>
                  </div>
                </div>

                <figure className="px-6 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{product.icon}</span>
                  </div>
                </figure>
                
                <div className="card-body items-center text-center p-6">
                  {/* Status Badge */}
                  <div className="w-full flex justify-between items-start mb-2">
                    <div className={`badge ${getStatusColor(product.status)} badge-sm`}>
                      {product.status}
                    </div>
                    <div className="flex gap-1">
                      {product.methods.map((method) => (
                        <div key={method} className="badge badge-outline badge-xs">
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="card-title text-lg mb-3">{product.name}</h2>
                  <p className="text-sm text-base-content/80 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="badge badge-outline badge-xs">
                        {feature}
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="badge badge-ghost badge-xs">
                        +{product.features.length - 3} more
                      </div>
                    )}
                  </div>

                  {/* Endpoint */}
                  <div className="text-xs font-mono bg-base-200 rounded px-2 py-1 mb-4 w-full">
                    {product.endpoint}
                  </div>
                  
                  <div className="card-actions justify-center w-full">
                    <button className="btn btn-primary btn-sm flex-1 hover:scale-105 transition-all">
                      Lihat Detail
                    </button>
                    <button className="btn btn-outline btn-sm px-3 hover:scale-105 transition-all">
                      Try
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Tidak ada API ditemukan</h3>
              <p className="text-base-content/80">Coba pilih kategori lain atau hubungi kami untuk request API khusus</p>
            </div>
          )}
        </div>
      </div>

      {/* Feature Comparison Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mengapa Memilih Pills API?
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Keunggulan yang membuat Pills API menjadi pilihan utama developer Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="card-title justify-center mb-3">Lightning Fast</h3>
                <p className="text-sm">Response time rata-rata &lt;100ms dengan CDN global</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="card-title justify-center mb-3">Enterprise Security</h3>
                <p className="text-sm">SSL/TLS encryption dengan API key authentication</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="card-title justify-center mb-3">Complete Docs</h3>
                <p className="text-sm">Dokumentasi lengkap dengan contoh kode untuk semua bahasa</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🇮🇩</div>
                <h3 className="card-title justify-center mb-3">Indonesia Focus</h3>
                <p className="text-sm">Didesain khusus untuk kebutuhan developer Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-secondary to-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Mencoba API Kami?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Mulai integrasi dalam hitungan menit dengan dokumentasi lengkap 
              dan support tim yang responsif. Gratis untuk memulai!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/member" className="btn btn-accent btn-lg px-8 hover:scale-105 transition-all">
                Mulai Gratis Sekarang
              </a>
              <a href="/doc" className="btn btn-outline btn-primary-content btn-lg px-8 hover:scale-105 transition-all">
                Lihat Dokumentasi
              </a>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              ✨ Setup dalam 5 menit • API key instant • Support bahasa Indonesia
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
