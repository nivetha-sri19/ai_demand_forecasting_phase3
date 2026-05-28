import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const ThemeToggle = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {

    setDarkMode(!darkMode);

    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200"
    >

      {darkMode
        ? <Sun size={20} />
        : <Moon size={20} />
      }

    </button>
  );
};

export default ThemeToggle;