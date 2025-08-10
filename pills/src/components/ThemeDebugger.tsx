'use client'
import { useTheme } from '@/hooks/useTheme'
import { useEffect, useState } from 'react'

export default function ThemeDebugger() {
    const { theme, mounted, toggleTheme } = useTheme()
    const [computedStyles, setComputedStyles] = useState<{
        primary?: string;
        background?: string;
        dataTheme?: string | null;
    }>({})
    
    useEffect(() => {
        if (mounted && typeof document !== 'undefined') {
            const root = document.documentElement
            const styles = getComputedStyle(root)
            setComputedStyles({
                primary: styles.getPropertyValue('--p').trim(),
                background: styles.getPropertyValue('--b1').trim(),
                dataTheme: root.getAttribute('data-theme')
            })
        }
    }, [theme, mounted])
    
    if (!mounted) return null
    
    return (
        <div className="fixed bottom-4 right-4 z-50 bg-base-200 p-4 rounded-lg shadow-lg border border-base-300 max-w-xs">
            <div className="text-sm space-y-2">
                <div className="font-bold text-primary">Theme Debug Info</div>
                <div>Hook Theme: <strong className="text-primary">{theme}</strong></div>
                <div>DOM data-theme: <strong className="text-accent">{computedStyles.dataTheme}</strong></div>
                <div>CSS --p: <span className="font-mono text-xs">{computedStyles.primary}</span></div>
                <div>CSS --b1: <span className="font-mono text-xs">{computedStyles.background}</span></div>
                <div className="flex gap-2 mt-2">
                    <span className="bg-primary text-primary-content px-2 py-1 rounded text-xs">Primary</span>
                    <span className="bg-base-100 text-base-content px-2 py-1 rounded text-xs border">Base</span>
                </div>
                <button 
                    onClick={toggleTheme}
                    className="btn btn-primary btn-xs w-full mt-2"
                >
                    Toggle Test
                </button>
            </div>
        </div>
    )
}
