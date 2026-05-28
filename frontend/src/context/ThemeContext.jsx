import {
  createContext,
  useContext,
  useState
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({
  children
}) => {

  const [darkMode, setDarkMode] =
    useState(false);

  const toggleTheme = () => {

    setDarkMode(!darkMode);

    document.documentElement.classList.toggle(
      'dark'
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
};

export const useThemeContext = () =>
  useContext(ThemeContext);