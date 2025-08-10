'use client'
import Navbar from '@/components/Navbar'
import AnimatedPillsBackground from '@/components/AnimatedPillsBackground'
import ThemeDebugger from '@/components/ThemeDebugger'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: "500+", label: "API Endpoints", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
  ]

  const features = [
    {
      icon: "🌊", 
      title: "Real-time Data",
      description: "Data yang selalu update dan real-time untuk kebutuhan aplikasi modern"
    },
    {
      icon: "🔒", 
      title: "Secure & Reliable",
      description: "Keamanan tingkat enterprise dengan reliability 99.9% uptime"
    },
    {
      icon: "📚", 
      title: "Easy Integration",
      description: "Dokumentasi lengkap dan mudah dipahami untuk integrasi cepat"
    },
    {
      icon: "💎", 
      title: "Premium Quality",
      description: "API berkualitas tinggi dengan performa optimal dan response cepat"
    }
  ]

  return (
    <>  
      <Navbar />
      {/* Hero Section with Pills Animation */}
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden pt-24">
        {/* Animated Background Pills */}
        <AnimatedPillsBackground />

        <div className="hero min-h-screen relative z-10">
          <div className="hero-content text-center">
            <div className="max-w-6xl">
              {/* Logo Section */}
              <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center items-center mb-6">
                  <div className="relative">
                    {/* Main Logo Circle with Pills Logo */}
                    <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                      <div className="w-32 h-32 bg-gradient-to-tr from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Image 
                          src="/icon/pills-logo.png"
                          alt="Pills Logo"
                          width={80}
                          height={80}
                          className="rounded-2xl shadow-lg filter drop-shadow-lg"
                        />
                      </div>
                    </div>
                    {/* Floating Pills */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.5s'}} />
                    <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary rounded-full animate-bounce shadow-lg" style={{animationDelay: '1s'}} />
                    <div className="absolute top-1/2 -right-6 w-6 h-6 bg-secondary rounded-full animate-bounce shadow-lg" style={{animationDelay: '1.5s'}} />
                  </div>
                </div>
              </div>

              {/* Title with Typewriter Effect */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Pills
                </h1>
                <div className="text-3xl md:text-4xl font-semibold mb-4">
                  <span className="text-primary">&lt;/SatriagsDev&gt;</span>
                </div>
                <div className="text-xl md:text-2xl font-medium mb-8">
                  <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    API Gateway for Modern Applications
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-lg md:text-xl mb-8 text-base-content/80 max-w-4xl mx-auto leading-relaxed">
                  Menyediakan API premium dengan data real-time, keamanan tingkat enterprise, 
                  dan dokumentasi lengkap untuk mempercepat pengembangan aplikasi Anda.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a href="/member" className="btn btn-primary btn-lg px-8 group hover:scale-105 transition-all">
                    <span className="group-hover:translate-x-1 transition-transform">Mulai Gratis</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="/doc" className="btn btn-outline btn-lg px-8 hover:scale-105 transition-all">
                    Lihat Dokumentasi
                  </a>
                </div>
              </div>

              {/* Animated Stats */}
              <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                        currentStat === index ? 'ring-2 ring-primary scale-105' : ''
                      }`}
                    >
                      <div className="stat-figure text-3xl">{stat.icon}</div>
                      <div className="stat-value text-primary">{stat.number}</div>
                      <div className="stat-title">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Floating Cards */}
      <div className="py-20 bg-base-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className={`w-full h-8 bg-primary rounded animate-pulse`} style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kenapa Pills API?
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Solusi API terdepan untuk developer modern dengan teknologi terkini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="card-body text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="card-title justify-center text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base-content/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section with Timeline */}
      <div className="py-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tentang SatriagsDev
            </h2>
            <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-12">
              Perjalanan kami dalam mengembangkan solusi teknologi terdepan untuk UMKM dan developer Indonesia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">🏢 Sejak 2019</h3>
                  <p className="text-lg leading-relaxed">
                    Satriags Developer berdiri sejak akhir tahun 2019, dan telah membantu banyak 
                    UMKM dalam membuat aplikasi sesuai keinginan mereka. Pengalaman bertahun-tahun 
                    ini membentuk keahlian kami dalam memahami kebutuhan bisnis lokal.
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-secondary/10 to-accent/10 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">🚀 Inovasi 2023</h3>
                  <p className="text-lg leading-relaxed">
                    Pada 27 Juli 2023, kami mengembangkan inovasi Pills API untuk membantu 
                    para developer dalam pengembangan aplikasi mereka. Komitmen kami adalah 
                    membuat API yang mudah diterapkan dan berkualitas tinggi.
                  </p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <a 
                  href="https://instagram.com/satriagsdev" 
                  target="_blank"
                  className="btn btn-outline btn-lg hover:scale-105 transition-all"
                >
                  Lihat Portfolio Kami di Instagram
                </a>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="stat bg-gradient-to-br from-primary to-primary/80 text-primary-content rounded-2xl shadow-xl">
                <div className="stat-figure text-3xl opacity-50">📅</div>
                <div className="stat-value">5+</div>
                <div className="stat-title text-primary-content/80">Tahun Pengalaman</div>
              </div>

              <div className="stat bg-gradient-to-br from-secondary to-secondary/80 text-secondary-content rounded-2xl shadow-xl">
                <div className="stat-figure text-3xl opacity-50">🏢</div>
                <div className="stat-value">100+</div>
                <div className="stat-title text-secondary-content/80">UMKM Terbantu</div>
              </div>

              <div className="stat bg-gradient-to-br from-accent to-accent/80 text-accent-content rounded-2xl shadow-xl">
                <div className="stat-figure text-3xl opacity-50">⚡</div>
                <div className="stat-value">24/7</div>
                <div className="stat-title text-accent-content/80">Support</div>
              </div>

              <div className="stat bg-gradient-to-br from-success to-success/80 text-success-content rounded-2xl shadow-xl">
                <div className="stat-figure text-3xl opacity-50">🌟</div>
                <div className="stat-value">99%</div>
                <div className="stat-title text-success-content/80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Pengguna API Kami</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <h3 className="card-title">satriags.com</h3>
                <p>Website resmi SatriagsDev yang menggunakan Pills API untuk berbagai fitur dinamis</p>
                <div className="card-actions">
                  <a href="https://satriags.com" target="_blank" className="btn btn-primary">
                    Kunjungi Website
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">📱</span>
                </div>
                <h3 className="card-title">Mobile Apps</h3>
                <p>Berbagai aplikasi mobile yang mengintegrasikan Pills API untuk performa optimal</p>
                <div className="card-actions">
                  <span className="badge badge-secondary">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🏪</span>
                </div>
                <h3 className="card-title">UMKM Partners</h3>
                <p>Berbagai aplikasi UMKM yang menggunakan Pills API untuk sistem mereka</p>
                <div className="card-actions">
                  <a href="/contact" className="btn btn-outline">
                    Bergabung
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Siap Mengembangkan Aplikasi Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Bergabunglah dengan developer Indonesia lainnya dan mulai menggunakan 
            Pills API untuk mempercepat pengembangan aplikasi Anda hari ini!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/member" className="btn btn-accent btn-lg px-8 hover:scale-105 transition-all">
              Daftar Sekarang - Gratis!
            </a>
            <a href="/pricing" className="btn btn-outline btn-primary-content btn-lg px-8 hover:scale-105 transition-all">
              Lihat Paket Harga
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Kontak Kami</h2>
            <p className="text-lg mb-8">
              Ingin berdiskusi dan memiliki kritik dan saran yang mendukung? HUBUNGI KAMI
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="card-title">Email</h3>
                  <p className="text-primary">support@satriags.com</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="card-title">Lokasi</h3>
                  <p>Gresik, Jawa Timur, Indonesia</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="card-title">Social Media</h3>
                  <div className="flex gap-4 mt-2 justify-center">
                    <a href="https://www.facebook.com/satriagsdev" target="_blank" className="btn btn-circle btn-outline hover:btn-primary">
                      📘
                    </a>
                    <a href="https://www.instagram.com/satriagsdev" target="_blank" className="btn btn-circle btn-outline hover:btn-secondary">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">💊</span>
            </div>
            <p className="font-bold text-2xl">
              Pills Satriags Developer
            </p>
          </div>
          <p className="text-lg">API Gateway for Modern Applications</p>
          <p>Copyright © Pills SatriagsDev 2025 - Semua hak dilindungi</p>
          <p className="text-sm opacity-70">
            Made with ❤️ in Indonesia
          </p>
        </aside>
      </footer>
      <ThemeDebugger />
    </>
  );
}
