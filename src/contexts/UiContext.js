import React, { createContext, useContext } from 'react';
import { useState } from 'react';

export const UiContext = createContext();

export const useUiContext = useContext(UiContext);

export default ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return <UiContext.Provider value={{ menuVisible, setMenuVisible }}>{children}</UiContext.Provider>;
};
