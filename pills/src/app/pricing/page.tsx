'use client'
import Navbar from '@/components/Navbar'
import AnimatedPillsBackground from '@/components/AnimatedPillsBackground'
import { useState, useEffect } from 'react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('monthly')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const plans = [
    {
      name: "Starter",
      icon: "🚀",
      price: { monthly: 0, yearly: 0 },
      popular: false,
      features: [
        "1,000 requests/bulan",
        "Basic API endpoints",
        "Email support",
        "Rate limiting: 10 req/menit",
        "Documentation access"
      ],
      color: "from-base-300 to-base-200"
    },
    {
      name: "Professional",
      icon: "💎",
      price: { monthly: 99000, yearly: 990000 },
      popular: true,
      features: [
        "50,000 requests/bulan",
        "Semua API endpoints",
        "Priority support",
        "Rate limiting: 100 req/menit",
        "Advanced analytics",
        "Webhook support",
        "Custom integrations"
      ],
      color: "from-primary to-secondary"
    },
    {
      name: "Enterprise",
      icon: "🏢",
      price: { monthly: 299000, yearly: 2990000 },
      popular: false,
      features: [
        "Unlimited requests",
        "Semua API endpoints",
        "24/7 phone support",
        "No rate limiting",
        "Advanced analytics",
        "Webhook support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      color: "from-accent to-warning"
    }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Pills Animation */}
      <div className="min-h-[80vh] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden pt-24">
        {/* Animated Background Pills */}
        <AnimatedPillsBackground count={15} pillSize="sm" />

        <div className="hero min-h-[80vh] relative z-10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              {/* Icon */}
              <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <span className="text-3xl">💰</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Paket Harga
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto">
                  Pilih paket yang sesuai dengan kebutuhan pengembangan aplikasi Anda. 
                  Mulai gratis dan upgrade sesuai pertumbuhan bisnis!
                </p>
              </div>

              {/* Billing Toggle */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-12">
                  <div className="join bg-base-100 shadow-lg rounded-full p-1">
                    <button 
                      className={`join-item btn ${activeTab === 'monthly' ? 'btn-primary' : 'btn-ghost'}`}
                      onClick={() => setActiveTab('monthly')}
                    >
                      Monthly
                    </button>
                    <button 
                      className={`join-item btn ${activeTab === 'yearly' ? 'btn-primary' : 'btn-ghost'}`}
                      onClick={() => setActiveTab('yearly')}
                    >
                      Yearly
                      <span className="badge badge-secondary badge-sm ml-2">Save 20%</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                } relative overflow-hidden`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-content px-3 py-1 text-sm font-bold rounded-bl-lg">
                    Most Popular ⭐
                  </div>
                )}
                
                <div className="card-body text-center relative">
                  {/* Plan Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{plan.icon}</span>
                  </div>

                  {/* Plan Name */}
                  <h2 className="card-title justify-center text-2xl mb-4">{plan.name}</h2>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">
                      Rp {activeTab === 'monthly' 
                        ? plan.price.monthly.toLocaleString('id-ID')
                        : Math.floor(plan.price.yearly/12).toLocaleString('id-ID')
                      }
                    </div>
                    <div className="text-sm text-base-content/60">
                      {activeTab === 'monthly' ? 'per bulan' : 'per bulan (billed yearly)'}
                    </div>
                    {activeTab === 'yearly' && plan.price.yearly > 0 && (
                      <div className="text-xs text-success mt-1">
                        Save Rp {(plan.price.monthly * 12 - plan.price.yearly).toLocaleString('id-ID')} per year!
                      </div>
                    )}
                  </div>

                  <div className="divider"></div>
                  
                  {/* Features */}
                  <ul className="space-y-3 text-left mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="card-actions justify-center">
                    <a 
                      href="/member" 
                      className={`btn btn-block ${
                        plan.popular 
                          ? 'btn-primary' 
                          : plan.name === 'Starter' 
                            ? 'btn-outline' 
                            : 'btn-secondary'
                      } hover:scale-105 transition-all`}
                    >
                      {plan.name === 'Starter' ? 'Mulai Gratis' : 'Pilih Paket'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Punya pertanyaan? Temukan jawaban untuk pertanyaan yang paling sering diajukan
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                  🤔 Apa itu Pills API?
                </div>
                <div className="collapse-content"> 
                  <p>Pills API adalah platform API yang menyediakan berbagai endpoint untuk kebutuhan pengembangan aplikasi modern. Kami menyediakan data real-time, keamanan tingkat enterprise, dan dokumentasi lengkap.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                  💳 Bagaimana sistem pembayaran?
                </div>
                <div className="collapse-content"> 
                  <p>Kami menerima pembayaran melalui transfer bank, e-wallet (Dana, OVO, GoPay), dan kartu kredit. Pembayaran dapat dilakukan bulanan atau tahunan dengan diskon khusus untuk paket tahunan.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                  ⚡ Apakah ada rate limiting?
                </div>
                <div className="collapse-content"> 
                  <p>Ya, setiap paket memiliki rate limiting yang berbeda. Paket Starter: 10 req/menit, Professional: 100 req/menit, Enterprise: Unlimited. Rate limiting dirancang untuk menjaga performa optimal untuk semua pengguna.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                  🔄 Bisakah upgrade/downgrade paket?
                </div>
                <div className="collapse-content"> 
                  <p>Tentu saja! Anda dapat upgrade atau downgrade paket kapan saja. Upgrade berlaku langsung, sedangkan downgrade akan berlaku di periode billing berikutnya. Tidak ada biaya tambahan untuk perubahan paket.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                  📞 Bagaimana dengan support?
                </div>
                <div className="collapse-content"> 
                  <p>Kami menyediakan berbagai level support: Email support untuk semua paket, Priority support untuk Professional, dan 24/7 phone support untuk Enterprise. Tim support kami siap membantu dalam bahasa Indonesia.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                  🔒 Seberapa aman data saya?
                </div>
                <div className="collapse-content"> 
                  <p>Keamanan adalah prioritas utama kami. Semua data dienkripsi dengan TLS 1.3, kami menggunakan autentikasi API key yang aman, dan infrastruktur kami memenuhi standar keamanan internasional dengan monitoring 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Memulai Perjalanan API Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan ribuan developer yang sudah mempercayai Pills API 
              untuk mengembangkan aplikasi mereka. Mulai gratis hari ini!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/member" className="btn btn-accent btn-lg px-8 hover:scale-105 transition-all">
                Mulai Gratis Sekarang
              </a>
              <a href="/contact" className="btn btn-outline btn-primary-content btn-lg px-8 hover:scale-105 transition-all">
                Hubungi Sales
              </a>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              ✨ Tidak perlu kartu kredit • Setup dalam 5 menit • Support 24/7
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
