import React, { createContext, useContext, useState, useCallback } from 'react';

const UiContext = createContext();

export const useUiContext = () => useContext(UiContext);

export default ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisible = useCallback(() => {
    setMenuVisible(prev => !prev);
  }, []);

  return <UiContext.Provider value={{ menuVisible, toggleMenuVisible }}>{children}</UiContext.Provider>;
};
