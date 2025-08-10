// components/ui/ThemeSelector.tsx
'use client';
import { useTheme, Theme } from '@/hooks/useTheme';

const themes = [
  { name: 'pills', label: 'Pills Light', description: '💊 Medical theme - Light Mode' },
  { name: 'pills-dark', label: 'Pills Dark', description: '💊 Medical theme - Dark Mode' },
] as const;

interface ThemeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeSelector({ isOpen, onClose }: ThemeSelectorProps) {
  const { theme, setSpecificTheme } = useTheme();

  const handleThemeSelect = (themeName: string) => {
    setSpecificTheme(themeName as Theme);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-base-100 rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-base-300">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Choose Theme</h2>
            <button 
              onClick={onClose}
              className="btn btn-ghost btn-circle"
            >
              ✕
            </button>
          </div>
          <p className="text-base-content/70 mt-2">Select a theme that suits your preference</p>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => handleThemeSelect(themeOption.name)}
                className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer border-2 ${
                  theme === themeOption.name ? 'border-primary' : 'border-transparent'
                }`}
                data-theme={themeOption.name}
              >
                <div className="card-body p-4">
                  <h3 className="card-title text-sm">{themeOption.label}</h3>
                  <p className="text-xs text-base-content/70">{themeOption.description}</p>
                  
                  {/* Color preview */}
                  <div className="flex gap-1 mt-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-neutral"></div>
                  </div>
                  
                  {theme === themeOption.name && (
                    <div className="badge badge-primary badge-sm mt-2">Active</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-base-300 bg-base-200">
          <div className="flex justify-between items-center text-sm text-base-content/70">
            <span>Current theme: <strong className="text-primary">{theme}</strong></span>
            <span>Theme preference is saved automatically</span>
          </div>
        </div>
      </div>
    </div>
  );
}
