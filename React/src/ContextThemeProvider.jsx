import { createContext, useState } from "react";

export const themeDetail = createContext(null);

const ContextThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('TEST NAME');

  return (
    <themeDetail.Provider value={{ theme, setTheme, name, setName }}>
      {children}
    </themeDetail.Provider>
  );
};

export default ContextThemeProvider;
