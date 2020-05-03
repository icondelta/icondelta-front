import React, { useEffect } from 'react';

const ICONEX_EVENT_RESPONSE = 'ICONEX_RELAY_RESPONSE';

export const useIconex = (handler) => {
  useEffect(() => {
    window.addEventListener(ICONEX_EVENT_RESPONSE, handler);
    return () => {
      window.removeEventListener(ICONEX_EVENT_RESPONSE, handler);
    };
  }, [handler]);
};
