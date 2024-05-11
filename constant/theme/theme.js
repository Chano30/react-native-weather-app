import { createContext, useMemo, useState } from "react"

export const themes = Object.freeze({
  dark: {
    theme: "dark",
    reverseTheme: "light",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  light: {
    theme: "light",
    reverseTheme: "dark",
    backgroundColor: "#fff",
    textColor: "#000"
  }
})

export const ThemeContext = createContext({
  themes: themes.light,
  toggleTheme: () => { }
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}