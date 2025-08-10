'use client'
import Link from 'next/link'
import { useTheme } from '@/hooks/useTheme'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const { theme, toggleTheme, mounted } = useTheme()
    const pathname = usePathname()

    // Navigation items with their paths
    const navItems = [
        { href: '/', label: 'Beranda', icon: '🏠' },
        { href: '/pricing', label: 'Harga', icon: '💰' },
        { href: '/product', label: 'Produk', icon: '📦' },
        { href: '/doc', label: 'Dokumentasi', icon: '📚' },
        { href: '/status', label: 'Status', icon: '📊' },
        { href: '/contact', label: 'Kontak', icon: '📞' }
    ]

    // Check if current path matches nav item
    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(href)
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="navbar fixed top-0 z-50 bg-base-100/95 backdrop-blur-md shadow-lg border-b border-base-300 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow-2xl border border-base-300">
                            {navItems.map((item) => (
                                <li key={item.href} className="mb-1">
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                            isActive(item.href) 
                                                ? 'bg-primary text-primary-content shadow-md' 
                                                : 'hover:bg-base-200 text-base-content'
                                        }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {item.label}
                                        {isActive(item.href) && (
                                            <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                            <li className="lg:hidden mt-4 pt-4 border-t border-base-300">
                                <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium cursor-not-allowed opacity-50">
                                    <div className="h-5 w-5 animate-pulse bg-base-content/20 rounded"></div>
                                    Loading...
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl font-bold text-primary flex items-center gap-3 h-16">
                        <Image 
                            src="/icon/pills-logo.png"
                            alt="Pills Logo"
                            width={48}
                            height={48}
                            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        />
                        <span className="hidden sm:inline">Pills <span className="text-accent">SatriagsDev</span></span>
                        <span className="sm:hidden text-primary font-extrabold">Pills</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 gap-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                        isActive(item.href) 
                                            ? 'bg-primary text-primary-content shadow-lg scale-105' 
                                            : 'hover:bg-base-200 hover:text-primary hover:scale-105'
                                    }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {item.label}
                                    {isActive(item.href) && (
                                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse ml-1" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end gap-3 pr-4">
                    <div className="btn btn-ghost btn-circle btn-lg opacity-50">
                        <div className="h-6 w-6 animate-pulse bg-base-content/20 rounded"></div>
                    </div>
                    <Link href="/member" className="btn btn-primary btn-lg px-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">Masuk / Daftar</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="navbar fixed top-0 z-50 bg-base-100/95 backdrop-blur-md shadow-lg border-b border-base-300 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-4 shadow-2xl border border-base-300">
                            {navItems.map((item) => (
                                <li key={item.href} className="mb-1">
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                            isActive(item.href) 
                                                ? 'bg-primary text-primary-content shadow-md' 
                                                : 'hover:bg-base-200 text-base-content'
                                        }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {item.label}
                                        {isActive(item.href) && (
                                            <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                            <li className="lg:hidden mt-4 pt-4 border-t border-base-300">
                                <button 
                                    onClick={toggleTheme} 
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-base-200 cursor-pointer w-full text-left"
                                    type="button"
                                >
                                    {theme === 'pills' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                            Dark Mode
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            Light Mode
                                        </>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl font-bold text-primary flex items-center gap-3 h-16">
                        <Image 
                            src="/icon/pills-logo.png"
                            alt="Pills Logo"
                            width={48}
                            height={48}
                            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        />
                        <span className="hidden sm:inline">Pills <span className="text-accent">SatriagsDev</span></span>
                        <span className="sm:hidden text-primary font-extrabold">Pills</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 gap-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                        isActive(item.href) 
                                            ? 'bg-primary text-primary-content shadow-lg scale-105' 
                                            : 'hover:bg-base-200 hover:text-primary hover:scale-105'
                                    }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {item.label}
                                    {isActive(item.href) && (
                                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse ml-1" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end gap-3 pr-4">
                    {/* Theme Toggle Button */}
                    <button 
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle btn-lg hover:bg-base-200 transition-all duration-200 hover:scale-110"
                        aria-label="Toggle theme"
                        type="button"
                    >
                        {theme === 'pills' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>
                    
                    <Link 
                        href="/member" 
                        className={`btn btn-lg px-6 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                            isActive('/member') 
                                ? 'btn-accent text-accent-content' 
                                : 'btn-primary'
                        }`}
                    >
                        {isActive('/member') ? (
                            <span className="flex items-center gap-2">
                                <span>👤</span>
                                Dashboard
                            </span>
                        ) : (
                            'Masuk / Daftar'
                        )}
                    </Link>
                </div>
            </div>
        </>
    );
}