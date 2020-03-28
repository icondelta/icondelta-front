import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const UiContext = createContext();

export const useUiContext = () => useContext(UiContext);

export default ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisible = _ => {
    setMenuVisible(prev => !prev);
  };

  return <UiContext.Provider value={{ menuVisible, setMenuVisible, toggleMenuVisible }}>{children}</UiContext.Provider>;
};
