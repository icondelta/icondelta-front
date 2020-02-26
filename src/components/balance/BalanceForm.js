import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../common/media';
import InputWrapper from '../common/InputWrapper';
import { useTokenContext } from '../../contexts/TokenContext';

const balanceFormWrapper = css`
  width: calc(72% - 16px);
  ${media.down('lg')} {
    width: 100%;
  }
  margin-top: 16px;
  ${media.down('sm')} {
    margin-top: 8px;
  }

  & > div {
    display: flex;
  }
`;

const inputWrapperStyle = css`
  label {
    padding: 0.5rem;
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
    border: 1px solid #e4e5e8;
  }
  button {
    flex: 1 1;
    margin: 0;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    color: #fafafa;
    background-color: #1aaaba;
  }
`;

const formMenu = css`
  .deposit,
  .withdraw {
    flex: auto;
    cursor: pointer;
    display: inline-flex;
    line-height: 2.5;
    border: 1px solid transparent;
    background-color: #eeeeee;
    justify-content: center;

    &:first-of-type {
      border-top-left-radius: 8px;
    }
    &:last-of-type {
      border-top-right-radius: 8px;
    }

    &.active {
      background: #fff;
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
