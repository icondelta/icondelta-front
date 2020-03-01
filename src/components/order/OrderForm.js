import React, { useCallback, useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { menuHeader } from '../../styles/common';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';

const orderFormWrapper = css`
  border-top: 1px solid transparent;

  & > div {
    display: flex;
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

const activeStyle = active => css`
  & > div:nth-of-type(${active}) {
    color: #fafafa;
    ${active === 1
      ? css`
          background-color: #e12343;
        `
      : css`
          background-color: #1763b6;
        `}
  }
`;

const orderButton = type => css`
  width: 100%;
  color: #fafafa;
  line-height: 1.5;
  margin-top: 1rem;
  font-size: 1.2rem;
  padding: 8px 16px;
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
    if (type !== target.textContent) {
      setType(target.textContent);
    }
  };

  const handleChange = useCallback(({ target }) => {
    const { id, value } = target;
    if (Number(value) > 0 || !value) {
      setOrder(prev => ({
        ...prev,
        [id]: value,
      }));
    }
  }, []);

  const handleOrder = e => {
    e.preventDefault();
  };

  return (
    <div className="card" css={[orderFormWrapper]}>
      <div css={[activeStyle(type === 'BUY' ? 1 : 2), menuHeader('div')]}>
        <div onClick={changeType}>BUY</div>
        <div onClick={changeType}>SELL</div>
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
        <InputWrapper id="amount" label={`Amount`} customStyle={[orderFormInputWrapper]}>
          <input id="amount" type="number" min={0} placeholder="0" value={order.amount || ''} onChange={handleChange} />
        </InputWrapper>
        <div style={{ paddingTop: '12px' }}>
          <span>Total:</span>
          <span>
            {order.total || 0} <span>{type === 'BUY' ? 'ICX' : token.symbol}</span>
          </span>
        </div>
        <button type="submit" className={type === 'BUY' ? 'buy-btn' : 'sell-btn'} css={[orderButton(type)]}>
          {type}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
