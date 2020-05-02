const ICONEX_EVENT_REQUEST = 'ICONEX_RELAY_REQUEST';

export const dispatchIconexEvent = (detail) => {
  window.dispatchEvent(new CustomEvent(ICONEX_EVENT_REQUEST, { detail }));
};
