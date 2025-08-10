'use client'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    category: 'general'
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Support",
      description: "Kirim email dan dapatkan balasan dalam 24 jam",
      contact: "support@pillssatriags.com",
      action: "Kirim Email"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Chat langsung dengan tim support kami",
      contact: "Online 09:00 - 17:00 WIB",
      action: "Mulai Chat"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telepon",
      description: "Hubungi kami untuk bantuan segera",
      contact: "+62 21 1234 5678",
      action: "Hubungi"
    }
  ]

  const faqItems = [
    {
      question: "Bagaimana cara mendapatkan API key?",
      answer: "Daftar sebagai member gratis di halaman Member, lalu dapatkan API key langsung dari dashboard Anda."
    },
    {
      question: "Apakah ada limit untuk free tier?",
      answer: "Ya, free tier mendapat 1000 request per bulan. Untuk kebutuhan lebih besar, tersedia paket premium."
    },
    {
      question: "Bagaimana jika API mengalami downtime?",
      answer: "Kami menjamin uptime 99.9%. Jika terjadi downtime, cek halaman status atau hubungi support."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Sangat aman. Kami menggunakan enkripsi SSL dan tidak menyimpan data sensitif dari request Anda."
    }
  ]

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

      <div className={`min-h-screen bg-base-100 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero Section */}
        <div className="text-center py-16 mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-base-content/70 mb-8">
            Tim support Pills API siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="container mx-auto px-4 pb-16">
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="card-body text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="card-title justify-center">{method.title}</h3>
                  <p className="text-base-content/70 mb-4">{method.description}</p>
                  <div className="font-semibold text-primary mb-4">{method.contact}</div>
                  <button className="btn btn-primary btn-sm">
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Nama Lengkap *</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Masukkan nama lengkap" 
                        className="input input-bordered focus:input-primary" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Email *</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="email@example.com" 
                        className="input input-bordered focus:input-primary" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Perusahaan (Opsional)</span>
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        placeholder="Nama perusahaan" 
                        className="input input-bordered focus:input-primary" 
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Kategori *</span>
                      </label>
                      <select 
                        name="category"
                        className="select select-bordered focus:select-primary"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="general">Pertanyaan Umum</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Pricing</option>
                        <option value="partnership">Partnership</option>
                        <option value="bug">Bug Report</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Subjek *</span>
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="Subjek pesan Anda" 
                      className="input input-bordered focus:input-primary" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Pesan *</span>
                    </label>
                    <textarea 
                      name="message"
                      className="textarea textarea-bordered h-32 focus:textarea-primary" 
                      placeholder="Tuliskan pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold">Alamat</div>
                        <div className="text-sm text-base-content/70">Jakarta, Indonesia</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold">Jam Operasional</div>
                        <div className="text-sm text-base-content/70">Senin - Jumat: 09:00 - 17:00 WIB</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold">Response Time</div>
                        <div className="text-sm text-base-content/70">Kurang dari 24 jam untuk email support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">FAQ</h3>
                  <div className="space-y-2">
                    {faqItems.map((item, index) => (
                      <div key={index} className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-sm font-medium">
                          {item.question}
                        </div>
                        <div className="collapse-content">
                          <p className="text-sm text-base-content/70">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a href="/doc" className="link link-primary">
                      Lihat dokumentasi lengkap →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
