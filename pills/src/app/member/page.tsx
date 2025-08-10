'use client'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

export default function Member() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('login')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    company: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

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

      <div className={`min-h-screen bg-base-100 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Hero Section */}
        <div className="text-center py-16 mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Member Area
          </h1>
          <p className="text-xl text-base-content/70 mb-8">
            Masuk ke akun Anda atau daftar untuk mulai menggunakan Pills API
          </p>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="tabs tabs-boxed bg-base-100/80 backdrop-blur-sm shadow-lg">
                  <button 
                    className={`tab tab-lg ${activeTab === 'login' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('login')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Masuk
                  </button>
                  <button 
                    className={`tab tab-lg ${activeTab === 'register' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('register')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Daftar
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Form Section */}
                <div className="card bg-base-100 shadow-2xl">
                  <div className="card-body p-8">
                    {activeTab === 'login' ? (
                      <>
                        <h2 className="card-title text-2xl justify-center mb-6">Masuk ke Akun</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                              type="email" 
                              name="email"
                              placeholder="Masukkan email Anda" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                              type="password" 
                              name="password"
                              placeholder="Masukkan password Anda" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                            <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Lupa password?</a>
                            </label>
                          </div>
                          
                          <div className="form-control">
                            <label className="cursor-pointer label justify-start gap-3">
                              <input type="checkbox" className="checkbox checkbox-primary" />
                              <span className="label-text">Ingat saya</span>
                            </label>
                          </div>
                          
                          <button type="submit" className="btn btn-primary w-full btn-lg">
                            Masuk
                          </button>
                          
                          <div className="divider">atau</div>
                          
                          <button type="button" className="btn btn-outline w-full">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Masuk dengan Google
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <h2 className="card-title text-2xl justify-center mb-6">Daftar Akun Baru</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Nama Lengkap</span>
                            </label>
                            <input 
                              type="text" 
                              name="name"
                              placeholder="Masukkan nama lengkap" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                              type="email" 
                              name="email"
                              placeholder="Masukkan email Anda" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Perusahaan (Opsional)</span>
                            </label>
                            <input 
                              type="text" 
                              name="company"
                              placeholder="Nama perusahaan" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.company}
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                              type="password" 
                              name="password"
                              placeholder="Buat password yang kuat" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold">Konfirmasi Password</span>
                            </label>
                            <input 
                              type="password" 
                              name="confirmPassword"
                              placeholder="Ulangi password Anda" 
                              className="input input-bordered w-full focus:input-primary" 
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="form-control">
                            <label className="cursor-pointer label justify-start gap-3">
                              <input type="checkbox" className="checkbox checkbox-primary" required />
                              <span className="label-text">
                                Saya setuju dengan <a href="#" className="link link-primary">Terms of Service</a> dan <a href="#" className="link link-primary">Privacy Policy</a>
                              </span>
                            </label>
                          </div>
                          
                          <button type="submit" className="btn btn-primary w-full btn-lg">
                            Daftar Sekarang
                          </button>
                          
                          <div className="divider">atau</div>
                          
                          <button type="button" className="btn btn-outline w-full">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Daftar dengan Google
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="space-y-6">
                  <div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-xl mb-4">Keuntungan Member Pills</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>API Key gratis dengan 1000 request/bulan</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Akses ke seluruh API endpoint</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Dashboard monitoring & analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Technical support via email</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Code examples & dokumentasi lengkap</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-xl mb-4">Trusted by Developers</h3>
                      <div className="stats stats-vertical">
                        <div className="stat">
                          <div className="stat-value text-primary">1000+</div>
                          <div className="stat-desc">Active Developers</div>
                        </div>
                        <div className="stat">
                          <div className="stat-value text-secondary">5M+</div>
                          <div className="stat-desc">API Calls per Month</div>
                        </div>
                        <div className="stat">
                          <div className="stat-value text-accent">99.9%</div>
                          <div className="stat-desc">Uptime Guarantee</div>
                        </div>
                      </div>
                    </div>
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
