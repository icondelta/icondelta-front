import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';

const balanceFormWrapper = css`
  border-top: none;
  margin-top: 16px;
  width: calc(72% - 16px);
  background-color: transparent;

  ${media.up('lg')} {
    margin-left: 16px;
  }
  ${media.down('lg')} {
    width: 100%;
  }

  & > div {
    display: flex;
  }
`;

const inputWrapperStyle = css`
  &:first-of-type {
    margin-right: 8px;
  }
  &:last-of-type {
    margin-left: 8px;
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
    flex: 2 1;
  }
  button {
    flex: 1 1;
    color: #1aaaba;
    padding: 8px 12px;
    background-color: #e6f8fa;
    margin: 0 0 0 8px;
    ${media.down('sm')} {
      margin: 0 0 0 4px;
    }
  }
`;

const formMenu = css`
  .deposit,
  .withdraw {
    flex: 1 1;
    color: #9e9e9e;
    cursor: pointer;
    display: inline-flex;
    line-height: 2.5;
    border-top: 1px solid #eee;
    background-color: #eeeeee;
    justify-content: center;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:first-of-type {
      &.active {
        color: #1aaaba;
        background: #fff;
      }
    }
    &:last-of-type {
      &.active {
        color: #1aaaba;
        background: #fff;
      }
    }
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
    setType(target.textContent);
  };

  const handleChange = useCallback(
    ({ target }) => {
      const { id, value } = target;
      setInputs({
        ...inputs,
        [id]: value,
      });
    },
    [inputs]
  );

  return (
    <div className="card" css={[balanceFormWrapper]}>
      <div css={formMenu}>
        <div onClick={changeType} className={type === 'DEPOSIT' ? 'deposit active' : 'deposit'}>
          DEPOSIT
        </div>
        <div onClick={changeType} className={type === 'WITHDRAW' ? 'withdraw active' : 'withdraw'}>
          WITHDRAW
        </div>
      </div>
      <div className="card__body">
        <InputWrapper id="tokenAmount" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="tokenAmount" type="number" value={inputs.tokenAmount} onChange={handleChange} placeholder="0" />
            <button>{type}</button>
          </div>
        </InputWrapper>
        <InputWrapper id="icxAmount" label={`${type} ${token?.symbol}`} customStyle={inputWrapperStyle}>
          <div>
            <input id="icxAmount" type="number" value={inputs.icxAmount} onChange={handleChange} placeholder="0" />
            <button>{type}</button>
          </div>
        </InputWrapper>
      </div>
    </div>
  );
};

export default TokenBalanceForm;
