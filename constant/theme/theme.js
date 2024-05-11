import { createContext, useState } from "react"

export const themes = Object.freeze({
  dark: {
    theme: "dark",
    reverseTheme: "light",

    primary: {
      primary: "#BB86FC",
      variant: "#3700B3",
    },
    secondary:"#03DAC6",
    backgroundColor:(opacity=null) => ({
      main: "#121212",
      secondary: `rgba(255,255,255, ${opacity})`
    }),
    textColor: "#FFFFFF"
  },
  light: {
    theme: "light",
    reverseTheme: "dark",

    primary: {
      primary: "#6200EE",
      variant: "#3700B3",
    },
    secondary:{
      secondary: "#03DAC6",
      variant: "#018786"
    },
    backgroundColor: "#FFFFFF",
    textColor: "#000000"
  }
})

export const ThemeContext = createContext({
  themes: themes.dark,
  toggleTheme: () => { }
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark)

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}