const ICONEX_EVENT_REQUEST = 'ICONEX_RELAY_REQUEST';

export const dispatchIconexEvent = (detail) => {
  window.dispatchEvent(new CustomEvent(ICONEX_EVENT_REQUEST, { detail }));
};

export const responseHandler = (dispatch) => ({ detail }) => {
  const { type, payload } = detail;

  switch (type) {
    case 'RESPONSE_ADDRESS':
      return dispatch({ type: 'RESPONSE_ADDRESS', address: payload });
    default:
      return;
  }
};
