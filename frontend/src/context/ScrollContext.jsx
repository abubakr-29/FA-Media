import React, { createContext, useState, useContext } from "react";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
