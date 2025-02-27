import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl
                 bg-white dark:bg-background
                 border border-muted dark:border-muted
                 shadow-sm hover:shadow-md
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                 dark:focus:ring-offset-background"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 h-6 w-6 rotate-0 transform text-yellow-500
                     transition-all duration-300 ease-in-out
                     ${theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <Moon 
          className={`absolute inset-0 h-6 w-6 rotate-90 transform text-blue-500
                     transition-all duration-300 ease-in-out
                     ${theme === 'light' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        />
      </div>
    </button>
  );
};