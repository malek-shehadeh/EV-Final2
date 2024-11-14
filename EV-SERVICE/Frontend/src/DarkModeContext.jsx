import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
// //////////////////////
// import React, { createContext, useState, useContext, useEffect } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (context === undefined) {
//     throw new Error("useDarkMode must be used within a DarkModeProvider");
//   }
//   return context;
// };
