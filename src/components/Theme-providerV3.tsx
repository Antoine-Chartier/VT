"use client";
import { createContext, useContext, useState, useEffect } from "react";


type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};




const ThemeContext = createContext<ThemeContextType>({theme: 'light', setTheme: () => {}});


export const ThemeProviderV3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    
      // On mount, read the preferred theme from the persistence layer (e.g., local storage)
  useEffect(() => {
    console.log("c quoi le theme ici ? ", theme);

    const storedTheme = window.localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme); // Add the stored theme to the class list of the <html> element
    }
  }, []);

  useEffect(() => {
    // Whenever theme changes, persist it in the storage
    console.log("theme changed, new one: ", theme);
    window.localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark'); 
    document.documentElement.classList.add(theme);
  }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme}} >
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeV3 = () => {
    return useContext(ThemeContext);
} 
