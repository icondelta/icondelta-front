import React, { createContext, useCallback, useContext, useReducer, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { loadICXBalances, loadTokenBalances } from '../api/icon';
import storage from '../utils/storage';
import { loopToIcx } from '../utils/converter';

const initialBalance = {
  icx: {
    wallet: 0,
    deposited: 0
  },
  token: {
    wallet: 0,
    deposited: 0
  },
};

const initialState = {
  address: storage.get('address'),
  balance: {
    ...initialBalance,
    error: '',
    loading: false,
  },
};

const WalletContext = createContext();

export const LOAD_BALANCE_REQUEST = 'LOAD_BALANCE_REQUEST';
export const LOAD_BALANCE_SUCCESS = 'LOAD_BALANCE_SUCCESS';
export const LOAD_BALANCE_FAILURE = 'LOAD_BALANCE_FAILURE';

export const RESPONSE_ADDRESS = 'RESPONSE_ADDRESS';

const reducer = (state, action) => {
  switch (action.type) {
    case RESPONSE_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case LOAD_BALANCE_REQUEST:
      return {
        ...state,
        balance: {
          ...initialBalance,
          error: '',
          loading: true,
        },
      };
    case LOAD_BALANCE_SUCCESS:
      return {
        ...state,
        balance: {
          ...action.balance,
          loading: false,
        },
      };
    case LOAD_BALANCE_FAILURE:
      return {
        ...state,
        balance: {
          ...initialBalance,
          error: action.error,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export const useWalletContext = () => useContext(WalletContext);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { symbol } = useParams();
  const { address, balance } = state;

  const loadBalances = useCallback(
    (token) => {
      dispatch({ type: LOAD_BALANCE_REQUEST });

      Promise.all([loadICXBalances(address), loadTokenBalances(address, token.address)])
        .then(([icx, token]) =>
          dispatch({
            type: LOAD_BALANCE_SUCCESS,
            balance: {
              icx: { wallet: loopToIcx(icx[0]), deposited: loopToIcx(icx[1]) },
              token: { wallet: loopToIcx(token[0]), deposited: loopToIcx(token[1]) },
            },
          })
        )
        .catch((e) => {
          console.error(e);
          dispatch({
            type: LOAD_BALANCE_FAILURE,
            error: e.response?.data.error.message,
          });
        });
    },
    [symbol, address]
  );

  const contextValue = useMemo(() => ({ address, balance, dispatch, loadBalances }), [
    address,
    balance,
  ]);

  return <WalletContext.Provider value={contextValue}>{children}</WalletContext.Provider>;
};
