import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';
import { menuHeader } from '../../styles/common';

const balanceFormWrapper = css`
  border-top: none;
  margin-top: 16px;
  width: calc(72% - 16px);
  ${media.up('lg')} {
    margin-left: 16px;
  }
  ${media.down('lg')} {
    width: 100%;
  }
`;

const balanceFormBody = css`
  display: flex;
  ${media.down('sm')} {
    flex-direction: column;
  }
`;

const inputWrapperStyle = css`
  ${media.up('sm')} {
    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  }
  label {
    padding: 8px;
    display: inline-flex;
  }
  div {
    display: flex;
  }
  input {
    ${media.up('xs')} {
      width: auto;
    }
    flex: 2;
  }
  button {
    flex: 1;
    color: #1aaaba;
    padding: 8px 12px;
    margin-left: 8px;
    ${media.down('sm')} {
      margin-left: 4px;
    }
  }
`;

const activeStyle = active => css`
  & div {
    &:first-of-type {
      border-right: 1px solid #e4e5e8;
    }
    &:last-of-type {
      border-left: 1px solid #e4e5e8;
    }
  }
  & div:nth-of-type(${active}) {
    color: #1aaaba;
    background: #fff;
  }
`;

const TokenBalanceForm = () => {
  const { token } = useTokenContext();
  const [type, setType] = useState('DEPOSIT');
  const [inputs, setInputs] = useState({
    tokenAmount: '',
    icxAmount: '',
  });

  const changeType = ({ target }) => {
    if (type !== target.textContent) {
      setType(target.textContent);
    }
  };

  const handleChange = useCallback(({ target }) => {
    const { id, value } = target;
    if (Number(value) >= 0 || !value) {
      setInputs(prev => ({
        ...prev,
        [id]: value,
      }));
    }
  }, []);

  return (
    <div className="card" css={[balanceFormWrapper]}>
      <div css={[activeStyle(type === 'DEPOSIT' ? 1 : 2), menuHeader('div')]}>
        <div onClick={changeType}>DEPOSIT</div>
        <div onClick={changeType}>WITHDRAW</div>
      </div>
      <div className="card__body" css={[balanceFormBody]}>
        <InputWrapper id="icxAmount" label={`${type} ICX`} customStyle={inputWrapperStyle}>
          <div>
            <input
              id="icxAmount"
              type="number"
              min={0}
              value={inputs.icxAmount}
              onChange={handleChange}
              placeholder="0"
            />
            <button className="btn">{type}</button>
          </div>
        </InputWrapper>
        <InputWrapper id="tokenAmount" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input
              id="tokenAmount"
              type="number"
              min={0}
              value={inputs.tokenAmount}
              onChange={handleChange}
              placeholder="0"
            />
            <button className="btn">{type}</button>
          </div>
        </InputWrapper>
      </div>
    </div>
  );
};

export default TokenBalanceForm;
