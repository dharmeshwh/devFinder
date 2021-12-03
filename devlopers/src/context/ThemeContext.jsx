import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const handleLight = ()=>{
    light ? setLight(false) : setLight(true)
  }
  return (
    <ThemeContext.Provider value={{light, handleLight}}>
      {children}
    </ThemeContext.Provider>
  );
};
