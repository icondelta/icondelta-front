import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { menuHeader } from '../../styles/common';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';
import { useWalletContext } from '../../contexts/WalletContext';
import { multiply } from '../../utils/converter';
import { dispatchIconexEvent } from '../../utils/iconex';

const orderFormWrapper = css`
  border-top: 1px solid transparent;
`;

const orderForm = css`
  & > div {
    display: flex;
    line-height: 2;
    justify-content: space-between;

    & > span > span {
      color: #9e9e9e;
    }
  }
`;

const orderFormInputWrapper = css`
  display: flex;
  flex-direction: column;
  input {
    font-size: 1.3rem;
  }
`;

const activeStyle = (active) => css`
  & > div:nth-of-type(${active}) {
    color: #fafafa;
    ${active === 1
      ? css`
          border-color: #e12343;
          background-color: #e12343;
        `
      : css`
          border-color: #1763b6;
          background-color: #1763b6;
        `}
  }
`;

const orderButton = css`
  width: 100%;
  color: #fafafa;
  line-height: 1.25;
  margin-top: 1rem;
  font-size: 1.2rem;
  padding: 8px 16px;
`;

const verifyOrder = (type, order, balance) => {
  switch (type) {
    case 'BUY':
      return order.total <= balance.icx.deposited;
    case 'SELL':
      return order.amount <= balance.token.deposited;
    default:
      return false;
  }
};

const OrderForm = () => {
  const { token } = useTokenContext();
  const { address, balance } = useWalletContext();
  const [type, setType] = useState('BUY');

  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const changeType = ({ target }) => {
    type !== target.textContent && setType(target.textContent);
  };

  const handleAmountChange = ({ target }) => {
    const parsed = parseFloat(target.value);
    if (parsed || !target.value) {
      setAmount(parsed);
      setTotal(multiply(price, parsed));
    }
  };

  const handlePriceChange = ({ target }) => {
    const parsed = parseFloat(target.value);
    if (parsed || !target.value) {
      setPrice(parsed);
      setTotal(multiply(parsed, amount));
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (!address) {
      dispatchIconexEvent({ type: 'REQUEST_ADDRESS' });
      return;
    }

    if (!verifyOrder(type, { amount, total }, balance)) {
      alert('Can not order more than you have');
    }

    // TODO: place order
  };

  return (
    <div className="card" css={[orderFormWrapper]}>
      <div css={[activeStyle(type === 'BUY' ? 1 : 2), menuHeader('div')]}>
        <div onClick={changeType}>BUY</div>
        <div onClick={changeType}>SELL</div>
      </div>
      <form className="card__body" css={[orderForm]} onSubmit={handleOrder}>
        <div>
          <span>Balance:</span>
          <span>
            0 <span>{type === 'BUY' ? 'ICX' : token.symbol}</span>
          </span>
        </div>
        <div css={{ paddingBottom: '8px' }}>
          <span>Available:</span>
          <span>
            0 <span>{type === 'BUY' ? 'ICX' : token.symbol}</span>
          </span>
        </div>
        <InputWrapper id="price" label="Price (ICX)" customStyle={[orderFormInputWrapper]}>
          <input
            id="price"
            type="number"
            min={0}
            placeholder="0"
            value={price || ''}
            onChange={handlePriceChange}
          />
        </InputWrapper>
        <InputWrapper id="amount" label={`Amount (${token.symbol})`} customStyle={[orderFormInputWrapper]}>
          <input
            id="amount"
            type="number"
            min={0}
            placeholder="0"
            value={amount || ''}
            onChange={handleAmountChange}
          />
        </InputWrapper>
        <div style={{ paddingTop: '12px' }}>
          <span>Total:</span>
          <span>
            {total || 0} <span>ICX</span>
          </span>
        </div>
        <button
          type="submit"
          className={type === 'BUY' ? 'buy-btn' : 'sell-btn'}
          css={[orderButton]}
        >
          {type}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
