import React, { useCallback, useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';
import media from '../../common/media';

const orderFormWrapper = css`
  height: auto;
  border-top: none;
  background: transparent;
`;

const orderFormHeader = css`
  padding: 0;
  ul {
    margin: 0;
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    flex: 1 0;
    color: #9e9e9e;
    cursor: pointer;
    background-color: #eeeeee;
    padding: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:first-of-type {
      &.active {
        color: #fafafa;
        border-top: 1px solid #e12343;
        background-color: #e12343;
      }
    }
    &:last-of-type {
      &.active {
        color: #fafafa;
        border-top: 1px solid #1763b6;
        background-color: #1763b6;
      }
    }
  }
`;

const assets = css`
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
`;

const orderButton = type => css`
  width: 100%;
  color: #fafafa;
  line-height: 1.5;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 8px 16px;
  background-color: ${type === 'BUY' ? '#e12343' : '#1763b6'};
`;

const OrderForm = () => {
  const { token } = useTokenContext();
  const [type, setType] = useState('BUY');

  const [order, setOrder] = useState({
    amount: 0,
    price: 0,
    total: 0,
  });

  const changeType = ({ target }) => {
    setType(target.textContent);
  };

  const handleChange = useCallback(({ target }) => {
    const { id, value } = target;
    if (Number(value) > 0 || !value) {
      setOrder(prev => ({
        ...prev,
        [id]: value,
      }));
    }
  }, [order]);

  const handleOrder = e => {
    e.preventDefault();
  };

  return (
    <div className="card" css={[orderFormWrapper]}>
      <div css={[orderFormHeader]}>
        <ul onClick={changeType}>
          <li className={type === 'BUY' ? 'active' : ''}>BUY</li>
          <li className={type === 'BUY' ? '' : 'active'}>SELL</li>
        </ul>
      </div>
      <form className="card__body" css={[assets]} onSubmit={handleOrder}>
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
        <InputWrapper id="price" label="Price" customStyle={[orderFormInputWrapper]}>
          <input id="price" type="number" min={0} placeholder="0" value={order.price || ''} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper id="amount" label={`Amount to ${type.toLowerCase()}`} customStyle={[orderFormInputWrapper]}>
          <input id="amount" type="number" min={0} placeholder="0" value={order.amount || ''} onChange={handleChange} />
        </InputWrapper>
        <div style={{ paddingTop: '12px' }}>
          <span>Total:</span>
          <span>
            {order.total || 0} <span>{type === 'BUY' ? 'ICX' : token.symbol}</span>
          </span>
        </div>
        <button type="submit" css={[orderButton(type)]}>
          {type}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
