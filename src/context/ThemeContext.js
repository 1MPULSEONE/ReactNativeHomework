import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "LIGHT", setDark: () => {
  }, setLight: () => {
  },
});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("LIGHT");
  const setDark = () => setTheme("DARK");
  const setLight = () => setTheme("LIGHT");
  return <ThemeContext.Provider value={{ theme, setDark, setLight }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { theme, setDark, setLight } = React.useContext(ThemeContext);
  return {
    theme,
    isDark: theme === "DARK",
    setDark,
    setLight
  };
};

