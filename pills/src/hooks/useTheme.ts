// hooks/useTheme.ts
'use client';
import { useState, useEffect } from 'react';

export type Theme = 'pills' | 'pills-dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('pills');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if theme is stored in localStorage or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'pills-dark' : 'pills');
    
    setTheme(initialTheme);
    
    // Set theme on multiple elements for maximum compatibility
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.classList.remove('pills', 'pills-dark', 'light', 'dark');
    document.documentElement.classList.add(initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
    document.body.classList.remove('pills', 'pills-dark', 'light', 'dark');
    document.body.classList.add(initialTheme);
    
    // Force a style recalculation
    document.documentElement.style.colorScheme = initialTheme === 'pills-dark' ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme: Theme = theme === 'pills' ? 'pills-dark' : 'pills';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Force immediate DOM update
    const html = document.documentElement;
    const body = document.body;
    
    // Remove all possible theme classes
    html.classList.remove('pills', 'pills-dark', 'light', 'dark');
    body.classList.remove('pills', 'pills-dark', 'light', 'dark');
    
    // Set new theme attribute and class
    html.setAttribute('data-theme', newTheme);
    html.classList.add(newTheme);
    body.setAttribute('data-theme', newTheme);
    body.classList.add(newTheme);
    
    // Force color scheme
    html.style.colorScheme = newTheme === 'pills-dark' ? 'dark' : 'light';
    body.style.colorScheme = newTheme === 'pills-dark' ? 'dark' : 'light';
    
    // Force immediate style recalculation
    html.style.display = 'none';
    void html.offsetHeight; // Trigger reflow
    html.style.display = '';
    
    // Dispatch custom event
    const event = new CustomEvent('themechange', { detail: { theme: newTheme } });
    window.dispatchEvent(event);
    
    // Force page repaint
    setTimeout(() => {
      document.body.style.opacity = '0.99';
      setTimeout(() => {
        document.body.style.opacity = '';
      }, 10);
    }, 10);
  };

  const setSpecificTheme = (newTheme: Theme) => {
    if (!mounted) return;
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Force immediate DOM update
    const html = document.documentElement;
    const body = document.body;
    
    // Remove all possible theme classes
    html.classList.remove('pills', 'pills-dark', 'light', 'dark');
    body.classList.remove('pills', 'pills-dark', 'light', 'dark');
    
    // Set new theme attribute and class
    html.setAttribute('data-theme', newTheme);
    html.classList.add(newTheme);
    body.setAttribute('data-theme', newTheme);
    body.classList.add(newTheme);
    
    // Force color scheme
    html.style.colorScheme = newTheme === 'pills-dark' ? 'dark' : 'light';
    body.style.colorScheme = newTheme === 'pills-dark' ? 'dark' : 'light';
    
    // Force immediate style recalculation
    html.style.display = 'none';
    void html.offsetHeight; // Trigger reflow
    html.style.display = '';
    
    // Dispatch custom event
    const event = new CustomEvent('themechange', { detail: { theme: newTheme } });
    window.dispatchEvent(event);
    
    // Force page repaint
    setTimeout(() => {
      document.body.style.opacity = '0.99';
      setTimeout(() => {
        document.body.style.opacity = '';
      }, 10);
    }, 10);
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  return {
    theme,
    toggleTheme,
    setSpecificTheme,
    mounted
  };
};
