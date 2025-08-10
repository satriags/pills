'use client'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

export default function Documentation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('getting-started')
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sidebarItems = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      items: []
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: '🔑',
      items: []
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: '📚',
      items: [
        { id: 'weather', title: 'Weather API' },
        { id: 'location', title: 'Location API' },
        { id: 'currency', title: 'Currency API' },
        { id: 'news', title: 'News API' },
        { id: 'qr-code', title: 'QR Code API' }
      ]
    },
    {
      id: 'examples',
      title: 'Code Examples',
      icon: '💡',
      items: [
        { id: 'javascript', title: 'JavaScript' },
        { id: 'php', title: 'PHP' },
        { id: 'python', title: 'Python' },
        { id: 'curl', title: 'cURL' }
      ]
    },
    {
      id: 'errors',
      title: 'Error Codes',
      icon: '⚠️',
      items: []
    },
    {
      id: 'rate-limits',
      title: 'Rate Limits',
      icon: '⏱️',
      items: []
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: '📦',
      items: []
    }
  ]

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'curl', name: 'cURL', icon: '💻' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Getting Started
                  </h1>
                  <p className="text-lg text-base-content/80">Mulai menggunakan Pills API dalam 5 menit</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="card bg-base-100 shadow-xl border border-primary/20">
                  <div className="card-body">
                    <h3 className="card-title text-primary">1. Daftar Akun</h3>
                    <p>Buat akun gratis di Pills API untuk mendapatkan API key Anda.</p>
                    <div className="card-actions">
                      <a href="/member" className="btn btn-primary btn-sm">Daftar Sekarang</a>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-secondary/20">
                  <div className="card-body">
                    <h3 className="card-title text-secondary">2. Dapatkan API Key</h3>
                    <p>Setelah login, dapatkan API key dari dashboard Anda.</p>
                    <div className="mockup-code text-xs">
                      <pre><code>API_KEY: pills_api_xxxxxxxxxxxxxxxx</code></pre>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-accent/20">
                  <div className="card-body">
                    <h3 className="card-title text-accent">3. Mulai Request</h3>
                    <p>Gunakan API key untuk mengakses berbagai endpoint kami.</p>
                    <div className="card-actions">
                      <button className="btn btn-accent btn-sm">Lihat Contoh</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">Quick Example</h3>
                    <div className="tabs tabs-boxed mb-4">
                      {languages.map((lang) => (
                        <button
                          key={lang.id}
                          className={`tab ${selectedLanguage === lang.id ? 'tab-active' : ''}`}
                          onClick={() => setSelectedLanguage(lang.id)}
                        >
                          <span className="mr-1">{lang.icon}</span>
                          {lang.name}
                        </button>
                      ))}
                    </div>
                    
                    {selectedLanguage === 'javascript' && (
                      <div className="mockup-code">
                        <pre><code>{`// JavaScript Example
const response = await fetch('https://api.pills.satriags.com/weather', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const data = await response.json();
console.log(data);`}</code></pre>
                      </div>
                    )}

                    {selectedLanguage === 'php' && (
                      <div className="mockup-code">
                        <pre><code>{`<?php
// PHP Example
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => 'https://api.pills.satriags.com/weather',
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer YOUR_API_KEY'
    ]
]);
$response = curl_exec($curl);
curl_close($curl);
echo $response;`}</code></pre>
                      </div>
                    )}

                    {selectedLanguage === 'python' && (
                      <div className="mockup-code">
                        <pre><code>{`# Python Example
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
}

response = requests.get(
    'https://api.pills.satriags.com/weather',
    headers=headers
)

print(response.json())`}</code></pre>
                      </div>
                    )}

                    {selectedLanguage === 'curl' && (
                      <div className="mockup-code">
                        <pre><code>{`# cURL Example
curl -X GET https://api.pills.satriags.com/weather \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code></pre>
                      </div>
                    )}
                  </div>
                </div>

                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <div>
                    <h3 className="font-bold">Pro Tip!</h3>
                    <div className="text-xs">Simpan API key Anda dengan aman dan jangan commit ke repository public.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'authentication':
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔑</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Authentication
                </h1>
                <p className="text-lg text-base-content/80">Cara authenticate dengan Pills API</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">API Key Authentication</h3>
                <p>Pills API menggunakan API key untuk autentikasi. Sertakan API key Anda di header Authorization:</p>
                
                <div className="mockup-code mt-4">
                  <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                </div>

                <div className="alert alert-warning mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  <span>Jaga kerahasiaan API key Anda dan jangan share di public!</span>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-8">
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-3xl font-bold mb-4">Dokumentasi Lengkap</h2>
              <p className="text-lg text-base-content/80 mb-8">
                Pilih topik dari sidebar untuk melihat dokumentasi detail
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="card bg-primary text-primary-content shadow-xl">
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center">🚀 Quick Start</h3>
                    <p>Mulai dalam 5 menit</p>
                  </div>
                </div>
                <div className="card bg-secondary text-secondary-content shadow-xl">
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center">📚 API Reference</h3>
                    <p>Dokumentasi lengkap semua endpoint</p>
                  </div>
                </div>
                <div className="card bg-accent text-accent-content shadow-xl">
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center">💡 Examples</h3>
                    <p>Contoh kode untuk berbagai bahasa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-base-100 pt-24">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 min-h-screen bg-base-200 border-r border-base-300 shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-base-content">Dokumentasi</h2>
                  <p className="text-sm text-base-content/60">Pills API Guide</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-content shadow-lg'
                          : 'hover:bg-base-200'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </button>
                    
                    {item.items.length > 0 && activeSection === item.id && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.id}
                            className="w-full text-left p-2 text-sm rounded hover:bg-base-200 transition-colors"
                          >
                            {subItem.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                <h3 className="font-bold mb-3 text-sm">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="/member" className="block text-primary hover:underline">Dashboard</a>
                  <a href="/contact" className="block text-primary hover:underline">Support</a>
                  <a href="/status" className="block text-primary hover:underline">API Status</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
